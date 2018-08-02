const db = require('../db.js');
const Sequelize = require('sequelize')

const movieActor = db.define('movieActor')

module.exports = movieActor