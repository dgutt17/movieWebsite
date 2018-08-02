const db = require('../db.js');
const Sequelize = require('sequelize')

const RunTime = db.define('runTime', {
    time: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.ENUM('1 hour - 1.5 hour', '1.5 hour - 2 hour', '2 hour - 2.5 hour', '2.5 hours and greater')
    }
})

module.exports = RunTime