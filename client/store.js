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
        const res = await axios.get(`http://www.omdbapi.com/?t=${searchTerm}&${key}`)
        const newMovie = res.data
        dispatch(addMovie(newMovie))
    }
}


export default createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

