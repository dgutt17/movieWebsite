const db = require('../db.js');
const Sequelize = require('sequelize')

const MovieRunTime = db.define('movieRunTime')

module.exports = MovieRunTime