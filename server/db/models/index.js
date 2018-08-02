const Movie = require('./movie')
const Actor = require('./actor')
const movieActor = require('./movieActor')
const BoxOffice = require('./boxOffice')
const MovieBoxOffice = require('./movieBoxOffice')
const Director = require('./director')
const Genre = require('./genre')
const MovieGenre = require('./movieGenre')
const Writer = require('./writer')
const MovieWriter = require('./movieWriter')
const RunTime = require('./runTime')
const MovieRunTime = require('./movieRunTime')
const Year = require('./year')
const MovieYear = require('./movieYear')


Movie.belongsToMany(Actor, {through: 'movieActor'})
Actor.belongsToMany(Movie, {through: 'movieActor'})

Movie.belongsToMany(BoxOffice, {through: 'movieBoxOffice'})
BoxOffice.belongsToMany(Movie, {through: 'movieBoxOffice'})

Movie.belongsToMany(Director, {through: 'movieDirector'})
Director.belongsToMany(Movie, {through: 'movieDirector'})

Movie.belongsToMany(Genre, {through: 'movieGenre'})
Genre.belongsToMany(Movie, {through: 'movieGenre'})

Movie.belongsToMany(Writer, {through: 'movieWriter'})
Writer.belongsToMany(Movie, {through: 'movieWriter'})

Movie.belongsToMany(RunTime, {through: 'movieRunTime'})
RunTime.belongsToMany(Movie, {through: 'movieRunTime'})

Movie.belongsToMany(Year, {through: 'movieYear'})
Year.belongsToMany(Movie, {through: 'movieYear'})

//You did not db.define the movie-director join table just to see if you can query it without explicitly defining it.
module.exports = {
    Movie,
    Actor,
    movieActor,
    BoxOffice,
    MovieBoxOffice,
    Director,
    Genre,
    MovieGenre,
    Writer,
    MovieWriter,
    RunTime,
    MovieRunTime,
    Year,
    MovieYear
}