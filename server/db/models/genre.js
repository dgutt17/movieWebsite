const db = require('../db.js');
const Sequelize = require('sequelize')

const Genre = db.define('genre', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Genre