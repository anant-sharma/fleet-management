/**
 * This file contains the code required
 * to create schema for coordinates collection
 */

import { Schema } from 'mongoose';

const coordinatesSchema = new Schema({
    capture_ts: Date,
    geolocation: {
        index: '2dsphere',
        required: [true, 'Geolocation Coordinates is a mandatory field.'],
        type: [Number],
    },
    maxSignalStrength: [],
    userId: {
        required: [true, 'User Id is a mandatory field.'],
        type: String,
    },
    vehicleId: {
        required: [true, 'Vehicle Id is a mandatory field.'],
        type: String,
    },
}, {
    collection: 'coordinates',
    timestamps: true,
});

export default coordinatesSchema;
