const db = require('../db.js');
const Sequelize = require('sequelize')

const Actor = db.define('actor', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Actor