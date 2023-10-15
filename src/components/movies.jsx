import React, { Component } from 'react';
import MovieItem from './common/movieItem';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    render() {
        return (
            <div style={{ paddingTop: 30 }} className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie =>
                            <MovieItem key={movie._id} movie={movie}>
                            </MovieItem>
                        )}
                    </tbody>
                </table>
            </div>);
    }
}

export default Movies;