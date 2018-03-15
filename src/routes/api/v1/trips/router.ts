/**
 * Import Dependencies
 */
import * as express from 'express';
import { Trip } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Trips list
 */
router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const trips = await Trip.find();
        res.status(200).json(trips);

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
