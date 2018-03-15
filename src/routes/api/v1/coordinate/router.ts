/**
 * Import Dependencies
 */
import * as express from 'express';
import * as _ from 'lodash';
import { Coordinates } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Coordinates by id
 */
router.get('/:id', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const {
            id,
        } = req.params;

        const coordinates = await Coordinates.findById(id);
        res.status(200).json(coordinates);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }

    if (next) { next(); }

});

/**
 * Add New Coordinates
 */
router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const {
            accuracy,
            altitude,
            capturedAt,
            heading,
            latitude,
            longitude,
            speed,
            userId,
            vehicleId,
        } = req.body;

        const geolocation = [longitude, latitude];

        const newCoordinates = new Coordinates({
            accuracy,
            altitude,
            capturedAt,
            geolocation,
            heading,
            latitude,
            longitude,
            speed,
            userId,
            vehicleId,
        });

        await newCoordinates.save();

        res.status(200).json({
            message: 'Coordinates registered successfully',
            status: 'success',
        });

    } catch (e) {

        console.trace(e);

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
