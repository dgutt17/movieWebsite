import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'
import {key} from '../key'

// Action Type
const ADD_MOVIE = 'ADD_MOVIE'

//Action Creator
const addMovie = newMovie => {
    return {
        type: ADD_MOVIE,
        newMovie
    }
}

const initialState = {
    newMovie: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_MOVIE:
            return {...state, newMovie: action.newMovie}
        default: 
            return state
    }
}

export const addMovieThunk = (searchTerm) =>{
    return async (dispatch) =>{
        console.log('searchTerm in thunk: ', searchTerm)
        const res = await axios.post('/api/user/ratings', {movie: searchTerm})
        const newMovie = res.data
        console.log('newMovie: ', newMovie)
        dispatch(addMovie(newMovie))
    }
}


export default createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

