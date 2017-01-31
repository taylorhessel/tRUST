var environment = process.env.NODE_ENV || 'development'
var config = require('../build/knexfile')[environment]

module.exports = require('knex')(config)
