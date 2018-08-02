const db = require('../db.js');
const Sequelize = require('sequelize')

const Movie = db.define('movie', {
    title: {
        type: Sequelize.STRING
    },
    rottenTomatoes: {
        type: Sequelize.STRING
    },
    imdb: {
        type: Sequelize.STRING
    },
    metacritic: {
        type: Sequelize.STRING
    },
    boxOffice:{
        type: Sequelize.STRING
    },
    runTime: {
        type: Sequelize.STRING
    },
    year:{
        type: Sequelize.STRING
    },
    poster: {
        type: Sequelize.STRING
    },
    plot: {
        type: Sequelize.TEXT
    }

})


module.exports = Movie