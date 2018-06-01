import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SingleMovie from './SingleMovie'

class Root extends Component {
    render (){
        return (
            <div id="rootContainer" className="p-3 mb-2 bg-info text-white">
                <Route exact path='/' component={HomePage} />
                <Route exact path='/singleMovie' component={SingleMovie} />
            </div>
        )
    }
}

export default Root;