/**
 * Import Dependencies
 */
import * as express from 'express';
import { User } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Users list
 */
router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const users = await User.find();
        res.status(200).json(users);

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
