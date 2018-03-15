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
import coordinateRouter from './coordinate/router';
import coordinatesRouter from './coordinates/router';
import tripRouter from './trip/router';
import tripsRouter from './trips/router';
import userRouter from './user/router';
import usersRouter from './users/router';
import vehicleRouter from './vehicle/router';
import vehiclesRouter from './vehicles/router';

/**
 * Bind Routes
 */
router.use('/clock', clockRouter);
router.use('/coordinate', coordinateRouter);
router.use('/coordinates', coordinatesRouter);
router.use('/trip', tripRouter);
router.use('/trips', tripsRouter);
router.use('/user', userRouter);
router.use('/users', usersRouter);
router.use('/vehicle', vehicleRouter);
router.use('/vehicles', vehiclesRouter);

/**
 * Export Module
 */
export default router;
