const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios')
const {key} = require('../key')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'public')))


let title = 'Mud'

app.get('/api', async (req, res, next)=>{
    try {
        const res2 = await axios.get(`http://www.omdbapi.com/?t=${title}&${key}`)
        const movie = res2.data;
        res.json(movie)
    } catch (err){
        console.error(err);
    }
})

app.post('/', async (req, res, next)=>{
    try{
        
    }catch(err){
        next(err);
    }
})

const PORT = 1337;

app.listen(PORT, ()=>{
    console.log(`You are listening on Port ${PORT}`)
})