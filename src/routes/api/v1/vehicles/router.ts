/**
 * Import Dependencies
 */
import * as express from 'express';
import { Vehicle } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Vehicles list
 */
router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);

    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }

    if (next) { next(); }

});

/**
 * Export Module
 */
export default router;
