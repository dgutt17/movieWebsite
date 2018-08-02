const db = require('../db.js');
const Sequelize = require('sequelize')

const BoxOffice = db.define('boxOffice', {
    total: {
        type: Sequelize.INTEGER
    }
})

module.exports = BoxOffice