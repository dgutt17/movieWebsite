import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SingleMovie from './SingleMovie'

class Root extends Component {
    render (){
        return (
            <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/singleMovie' component={SingleMovie} />
            </div>
        )
    }
}

export default Root;