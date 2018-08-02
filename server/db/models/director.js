const db = require('../db.js');
const Sequelize = require('sequelize')

const Director = db.define('director', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Director