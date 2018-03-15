/**
 * Import Dependencies
 */
import * as express from 'express';
import { Coordinates } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Coordinates list
 */
router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const coordinatesList = await Coordinates.find();
        res.status(200).json(coordinatesList);

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
