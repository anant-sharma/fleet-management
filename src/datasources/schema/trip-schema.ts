/**
 * This file contains the code required
 * to create schema for vehicles collection
 */

import { Schema } from 'mongoose';

const tripSchema = new Schema({
    assignedAt: Date,
    assignedBy: String,
    endTs: {
        required: [true, 'Trip End Time is a mandatory field.'],
        type: String,
    },
    startTs: {
        required: [true, 'Trip Start Time is a mandatory field.'],
        type: String,
    },
    userId: {
        required: [true, 'User Id is a mandatory field.'],
        type: String,
    },
    vehicleId: {
        required: [true, 'Vehicle Id is a mandatory field.'],
        type: String,
    },
}, {
    collection: 'trips',
    timestamps: true,
});

export default tripSchema;
