const knex = require('knex');
const config = require('./config/connectionInfo');

const envConfig = process.env.NODE_ENV === 'development' ? config.development : config.production;

const db = knex(envConfig);
module.exports = db;