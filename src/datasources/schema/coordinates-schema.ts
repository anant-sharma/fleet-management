/**
 * This file contains the code required
 * to create schema for coordinates collection
 */

import { Schema } from 'mongoose';

const coordinatesSchema = new Schema({
    capture_ts: Date,
    geolocation: { type: [Number], index: '2dsphere'},
    maxSignalStrength: [],
    userId: String,
    vehicleId: String,
}, {
    collection: 'coordinates',
    timestamps: true,
});

export default coordinatesSchema;
