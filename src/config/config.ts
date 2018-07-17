/**
 * This file contins the config
 * required to run the app
 */
import * as _ from 'lodash'

 /**
  * App Config
  */
export const appConfig =  {
    auth: !_.includes(['false', 'False', 'No'], process.env.auth),
    port: process.env.PORT || 21012,
};

/**
 * DB Connection
 */
export const dbConfig = {
    connectionString: process.env.dbConnectionString || '',
    // connectionString: `mongodb://<username>:<password>@chipserver.ml:27017/fleet-management?authSource=admin`,
};

/**
 * JWT Config
 */
export const jwtConfig = {
    options: {
        algorithm: 'HS256',
        expiresIn: 3600,
        issuer: 'Chipserver',
    },
    secret: 'appsecret',
};

/**
 * Paths
 */
export const paths = {
    whitelisted: [
        '/auth',
    ],
};
