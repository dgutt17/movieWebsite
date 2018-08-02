const db = require('../db.js');
const Sequelize = require('sequelize')

const MovieBoxOffice = db.define('movieBoxOffice')

module.exports = MovieBoxOffice