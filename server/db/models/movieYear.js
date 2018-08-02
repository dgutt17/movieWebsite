const db = require('../db.js');
const Sequelize = require('sequelize')

const MovieYear = db.define('movieYear')

module.exports = MovieYear