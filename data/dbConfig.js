const knex = require('knex');
const knexConfig = require('../knexfile.js')

// const db = knex(knexConfig.development);
const db = knex(knexConfig[process.env.NODE_ENV || 'development']); //for heroku

module.exports = db;