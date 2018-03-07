/**
 * This file contains the exportable models
 * corresponding to the datasources schema
 */

import * as mongoose from 'mongoose';

import coordinatesSchema from './schema/coordinates-schema';
import tripSchema from './schema/trip-schema';
import userSchema from './schema/user-schema';
import vehicleSchema from './schema/vehicle-schema';

import { dbConfig } from '../config/config';

/**
 * Coordinates Model
 */
export const Coordinates = mongoose.model('Coordinates', coordinatesSchema);

/**
 * Trip Model
 */
export const Trip = mongoose.model('Trip', tripSchema);

/**
 * User Model
 */
export const User = mongoose.model('User', userSchema);

/**
 * Vehicle Model
 */
export const Vehicle = mongoose.model('Vehicle', vehicleSchema);

/**
 * Mongoose Connection
 */
export const Connection = mongoose.connect(dbConfig.connectionString);
