const db = require('../db.js');
const Sequelize = require('sequelize')

const Writer = db.define('writer', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Writer