/**
 * This file contains the code required
 * to create schema for vehicles collection
 */

import { Schema } from 'mongoose';

const tripSchema = new Schema({
    assignedAt: Date,
    assignedBy: String,
    endTs: Date,
    startTs: Date,
    userId: String,
    vehicleId: String,
}, {
    collection: 'trips',
    timestamps: true,
});

export default tripSchema;
