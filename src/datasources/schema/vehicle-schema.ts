/**
 * This file contains the code required
 * to create schema for vehicles collection
 */

import { Schema } from 'mongoose';

const vehicleSchema = new Schema({
    chassisNo: {
        required: [true, 'Chassis Number is a mandatory field.'],
        type: String,
    },
    engineNo: {
        required: [true, 'Engine Number is a mandatory field.'],
        type: String,
    },
    regNo: {
        required: [true, 'Registration Number is a mandatory field.'],
        type: String,
    },
}, {
    collection: 'vehicles',
    timestamps: true,
});

export default vehicleSchema;
