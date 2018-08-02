import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux'
import {addMovieThunk}  from '../store'


class HomePage extends Component {
    constructor (){
        super();
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const searchTerm = this.state.searchTerm
        this.props.displayMovie(searchTerm)
    }
    

    render() {
        const {newMovie} = this.props
        console.log('newMovie: ', newMovie)
        return (
            <div id="mainContainer">
                <h1>Fresh Tomatoes</h1>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div><label htmlFor="searchTerm"><h4>Movie Title</h4></label></div>
                    <input name="searchTerm" type="text" />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                {Object.keys(this.props.newMovie).length ? 
                    <div>
                        <Link to={'/singleMovie'}>
                            <div className="title"><h3>{newMovie.title}</h3></div>
                        </Link>
                        <div><img src={newMovie.poster}/></div>
                        <div className="info">
                            <ul className="movieInfo">
                                <li className="info">{`Rotten Tomatoes: ${newMovie.rottenTomatoes}`}</li>
                                <li className="info">{`Imdb: ${newMovie.imdb}/10`}</li>
                                <li className="info">{`Metacritic: ${newMovie.metacritic}/100`}</li>
                            </ul>
                        </div>
                    </div>: 
                    <div>
                        <img src="homepage.jpg" className="p-3 mb-2 bg-info text-white"/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {newMovie: state.newMovie}
}

const mapDispatchToProps = dispatch =>{
    return {displayMovie: (searchTerm) => dispatch(addMovieThunk(searchTerm))}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)