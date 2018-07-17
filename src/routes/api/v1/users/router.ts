/**
 * Import Dependencies
 */
import * as express from 'express';
import * as _ from 'lodash';
import Bcrypt from '../../../../common/bcrypt';
import { User } from '../../../../datasources/models';

/**
 * Initialize Router
 */
const router = express.Router();

/**
 * Get Users list
 */
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

/**
 * Get User by id
 */
router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {
            id,
        } = req.params;

        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

/**
 * Add New User
 */
router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const {
            email,
            name,
            password,
        } = req.body;

        const passwordHash = await Bcrypt.encrypt(password);

        const newUser = new User({
            email,
            name,
            password: passwordHash,
        });

        await newUser.save();

        res.status(200).json({
            message: 'User registered successfully',
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
