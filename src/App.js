import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies';
import FilerItems from "./components/FilerItems";
import { getMovies } from "./services/fakeMovieService";


class App extends Component {
	state = {
		movies: getMovies(),
		currPage: 1,
		pageSize: 3,
	};

  handledelete = (movieId) => {
		const movies = this.state.movies.filter((m) => m._id !== movieId);
		this.setState({ movies });
	};

	handlePageChange = (currPage) => {
		this.setState({ currPage });
	};

	render() {
    const { length: count } = this.state.movies;
		const { pageSize, currPage } = this.state;

		return (
			<div style={{ paddingTop: 30 }} className="container">
				<div className="row">
					<div className="col-3">
						<FilerItems></FilerItems>
					</div>
					<div
						className="col-9"
						style={{ paddingLeft: "20px", boxSizing: "border-box" }}
					>
						<Movies
              movies={this.state.movies}
              onDelete={this.handledelete}
              onPageChange={this.handlePageChange}
							itemsCount={count}
							pageSize={pageSize}
							currPage={currPage}
						></Movies>
					</div>
				</div>
			</div>
		);
	}
}
 
export default App;
