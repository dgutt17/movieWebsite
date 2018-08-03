const router = require('express').Router()
const {key} = require('../../../key')
const axios = require('axios')
const {Movie, Actor, Director, Writer, Genre, Year} = require('../../db/models') 

router.post('/', async (req, res, next)=>{
    try {
        let searchTerm = req.body.movie.split(' ').map(word => {
            return word[0].toUpperCase() + word.slice(1)
        }).join(' ')
        searchTerm = searchTerm.split('-').map(word => {
            return word[0].toUpperCase() + word.slice(1)
        }).join('-')
        const movies = await Movie.findOne({
            where: {
                title: searchTerm
            }
        })
        if(!!movies){
            res.json(movies)
        } else {
            const imdbSearchTerm = searchTerm.split(' ').join('_')
            const imdbRes = await axios.get(`http://www.omdbapi.com/?t=${imdbSearchTerm}&${key}`)
            const movie = imdbRes.data;
            const newMovie = await Movie.create({
                title: movie.Title,
                rottenTomatoes: movie.Ratings.find(rating => rating.Source === 'Rotten Tomatoes').Value,
                imdb: movie.imdbRating,
                metacritic: movie.Metascore,
                boxOffice: movie.BoxOffice,
                runTime: movie.Runtime,
                year: movie.Year,
                poster: movie.Poster,
                plot: movie.Plot
            })
            const actors = await Promise.all(movie.Actors.split(',').map(async actor => {
                const answer = await Actor.findOrCreate({
                    where:{
                        name: actor
                    }
                })
                return answer.map(elem => elem)[0]
            }))
            const writers = await Promise.all(movie.Writer.split(',').map(async writer => {
                const answer = await Writer.findOrCreate({
                    where:{
                        name: writer
                    }
                })
                return answer.map(elem => elem)[0]
            }))

            newMovie.addWriter(writers)
            newMovie.addActor(actors)
            res.json(newMovie)
        }
    } catch (err){
        console.error(err);
    }
})

module.exports = router;