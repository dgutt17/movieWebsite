const db = require('../db.js');
const Sequelize = require('sequelize')

const Year = db.define('year', {
    releaseYear: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.ENUM('1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s')
    }
})

module.exports = Year