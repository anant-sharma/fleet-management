/**
 * This file contains the code required
 * to create schema for users collection
 */

import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: String,
    password: String,
    username: String,
}, {
    collection: 'users',
    timestamps: true,
});

export default userSchema;
