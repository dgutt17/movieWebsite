const db = require('../db.js');
const Sequelize = require('sequelize')

const MovieWriter = db.define('movieWriter')

module.exports = MovieWriter