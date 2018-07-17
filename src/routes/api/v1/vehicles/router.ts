/**
 * Import Dependencies
 */
import * as express from 'express';
import * as _ from 'lodash'
import { Vehicle } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Vehicles list
 */
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

/**
 * Get Vehicle by id
 */
router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {
            id,
        } = req.params;

        const vehicle = await Vehicle.findById(id);
        res.status(200).json(vehicle);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

/**
 * Add New Vehicle
 */
router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const {
            chassisNo,
            engineNo,
            regNo,
        } = req.body;

        const newVehicle = new Vehicle({
            chassisNo,
            engineNo,
            regNo,
        });

        await newVehicle.save();

        res.status(200).json({
            message: 'Vehicle registered successfully',
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
