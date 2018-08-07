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
            // const imdbRes = await axios.get(`http://imdbapi.net/api/?api_ke=${key}&title=${imdbSearchTerm}&type=json`)
            const movie = imdbRes.data;
            console.log('movie: ', movie)
            const newMovie = await Movie.create({
                title: movie.Title,
                rottenTomatoes: movie.Ratings.find(rating => rating.Source === 'Rotten Tomatoes').Value,
                imdbScore: movie.imdbRating,
                metacritic: movie.Metascore,
                boxOffice: movie.BoxOffice,
                runTime: movie.Runtime,
                year: movie.Year,
                poster: movie.Poster,
                plot: movie.Plot
            })
            const actors = await Promise.all(movie.Actors.split(',').map(async actor => {
                if(actor[0] === ' '){
                    actor = actor.slice(1)
                }
                const answer = await Actor.findOrCreate({
                    where:{
                        name: actor
                    }
                })
                return answer.map(elem => elem)[0]
            }))
            const writers = await Promise.all(movie.Writer.split(',').map(async writer => {
                if(writer[0] === ' '){
                    writer = writer.slice(1)
                }
                writer = writer.split(' ').slice(0, 2).join(' ')
                const answer = await Writer.findOrCreate({
                    where:{
                        name: writer
                    }
                })
                return answer.map(elem => elem)[0]
            }))

            const directors = await Promise.all(movie.Director.split(',').map(async director => {
                if(director[0] === ' '){
                    director = director.slice(1)
                }
                const answer = await Director.findOrCreate({
                    where:{
                        name: director
                    }
                })
                return answer.map(elem => elem)[0]
            }))

            newMovie.addWriter(writers)
            newMovie.addActor(actors)
            newMovie.addDirector(directors)
            res.json(newMovie)
        }
    } catch (err){
        console.error(err);
    }
})

module.exports = router;