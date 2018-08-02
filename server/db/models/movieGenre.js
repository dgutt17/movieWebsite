const db = require('../db.js');
const Sequelize = require('sequelize')

const MovieGenre = db.define('movieGenre')

module.exports = MovieGenre