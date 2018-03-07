/**
 * This file contains the code required
 * to create schema for users collection
 */

import { Schema } from 'mongoose';

const userSchema = new Schema({
    email: {
        required: [true, 'Email is a mandatory field.'],
        type: String,
    },
    name: {
        required: [true, 'Name is a mandatory field.'],
        type: String,
    },
    password: {
        required: [true, 'Password is a mandatory field.'],
        type: String,
    },
}, {
    collection: 'users',
    timestamps: true,
});

export default userSchema;
