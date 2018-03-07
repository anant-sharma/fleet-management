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
import userRouter from './user/router';
import usersRouter from './users/router';
import vehicleRouter from './vehicle/router';
import vehiclesRouter from './vehicles/router';

/**
 * Bind Routes
 */
router.use('/clock', clockRouter);
router.use('/user', userRouter);
router.use('/users', usersRouter);
router.use('/vehicle', vehicleRouter);
router.use('/vehicles', vehiclesRouter);

/**
 * Export Module
 */
export default router;
