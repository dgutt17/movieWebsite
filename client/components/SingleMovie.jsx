import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux'
//import {addMovieThunk}  from '../store'

class SingleMovie extends Component {

    render(){
        return (
            <div>
                <div>
                    <Link to={'/'}>
                        <button className="btn btn-danger">Home Button</button>
                    </Link>
                </div>
                <div className="Header">
                    <h1>{this.props.newMovie.Title}</h1>
                    <img src={this.props.newMovie.Poster} />
                </div>
                <div>
                    <div className="info">
                        <ul className="movieInfo">
                            <li className="info">{`Rotten Tomatoes: ${this.props.newMovie.Ratings[1].Value}`}</li>
                            <li className="info">{`Imdb: ${this.props.newMovie.Ratings[0].Value}`}</li>
                            <li className="info">{`Metacritic: ${this.props.newMovie.Ratings[2].Value}`}</li>
                        </ul>
                        <p className="infoLeft">
                            <div>Genre: {this.props.newMovie.Genre}</div>
                            <div>Director: {this.props.newMovie.Director}</div>
                            <div>Cast: {this.props.newMovie.Actors}</div>
                            <div>Writer: {this.props.newMovie.Writer}</div>
                            <div>Awards: {this.props.newMovie.Awards}</div>
                            <div>Runtime: {this.props.newMovie.Runtime}</div>
                            <div>Box Office: {this.props.newMovie.BoxOffice}</div>
                            <div>Summary: {this.props.newMovie.Plot}</div>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return {newMovie: state.newMovie}
}

export default connect(mapStateToProps)(SingleMovie)