const router = require('express').Router()
const movieRatings = require('./movieRatings')

router.use('/ratings', movieRatings)


module.exports = router;