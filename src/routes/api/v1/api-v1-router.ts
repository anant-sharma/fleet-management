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

/**
 * Bind Routes
 */
router.use('/clock', clockRouter);
router.use('/user', userRouter);
router.use('/users', usersRouter);

/**
 * Export Module
 */
export default router;
