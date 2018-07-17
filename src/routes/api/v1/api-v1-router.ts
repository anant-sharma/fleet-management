/**
 * Import Dependencies
 */
import * as express from 'express';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Import Routes
 */
import clockRouter from './clock/router';
import coordinatesRouter from './coordinates/router';
import tripsRouter from './trips/router';
import usersRouter from './users/router';
import vehiclesRouter from './vehicles/router';

/**
 * Bind Routes
 */
router.use('/clock', clockRouter);
router.use('/coordinates', coordinatesRouter);
router.use('/trips', tripsRouter);
router.use('/users', usersRouter);
router.use('/vehicles', vehiclesRouter);

/**
 * Export Module
 */
export default router;
