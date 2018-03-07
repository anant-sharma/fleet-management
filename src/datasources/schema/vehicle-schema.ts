/**
 * This file contains the code required
 * to create schema for vehicles collection
 */

import { Schema } from 'mongoose';

const vehicleSchema = new Schema({
    chassisNo: String,
    engineNo: String,
    regNo: String,
}, {
    collection: 'vehicles',
    timestamps: true,
});

export default vehicleSchema;
