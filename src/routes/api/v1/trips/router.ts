/**
 * Import Dependencies
 */
import * as express from 'express';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Trip } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Trips list
 */
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

/**
 * Get Trip by id
 */
router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {
            id,
        } = req.params;

        const trip = await Trip.findById(id);
        res.status(200).json(trip);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

/**
 * Add New Trip
 */
router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const {
            assignedBy,
            endTs,
            startTs,
            userId,
            vehicleId,
        } = req.body;

        const assignedAt = moment().format('x');

        const newTrip = new Trip({
            assignedAt,
            assignedBy,
            endTs,
            startTs,
            userId,
            vehicleId,
        });

        await newTrip.save();

        res.status(200).json({
            message: 'Trip registered successfully',
            status: 'success',
        });
    } catch (e) {
        /**
         * In case of validation error
         */
        const validationErr: string[] = [];
        if (_.get(e, 'name', null) === 'ValidationError') {
            _.forOwn(_.get(e, 'errors', {}), (v, k) => {
                validationErr.push(_.get(v, 'message', null));
            });
        }

        res.status(400).json({
            error: validationErr.length ? validationErr : e,
            status: 'error',
        });
    }
});

/**
 * Export Module
 */
export default router;
