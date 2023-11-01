import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies';
import FilerItems from "./components/common/FilerItems";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import NavBar from "./components/navBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import SingleMovie from "./components/singleMovie";

class App extends Component {
	state = {
		movies: [],
		genres: [],
		currPage: 1,
		pageSize: 3,
		selectedGenre: { name: "All Genres", _id: "-1" },
	};

	componentDidMount() {
		const genres = [{ name: "All Genres", _id: "-1" }, ...getGenres()];
		this.setState({ movies: getMovies(), genres });
	}

	handledelete = (movieId) => {
		const movies = this.state.movies.filter((m) => m._id !== movieId);
		this.setState({ movies });
	};

	handlePageChange = (currPage) => {
		this.setState({ currPage });
	};

	handleFilter = (genre) => {
		const selGenre = genre.name === "All Genres" ? genre : genre;
		this.setState({ selectedGenre: selGenre, currPage: 1 });
	};

	render() {
		const { length: count } = this.state.movies;
		const { pageSize, currPage, genres, selectedGenre } = this.state;

		const mainMarkup = (
			<div className="row">
				<div className="col-3">
					<FilerItems
						items={genres}
						onChangeFilter={this.handleFilter}
						selectedGenre={selectedGenre}
					></FilerItems>
				</div>
				<div
					className="col-9"
					style={{
						paddingLeft: "20px",
						boxSizing: "border-box",
					}}
				>
					<Movies
						movies={this.state.movies}
						onDelete={this.handledelete}
						onPageChange={this.handlePageChange}
						itemsCount={count}
						pageSize={pageSize}
						currPage={currPage}
						selectedGenre={selectedGenre}
						onSort={this.handleSort}
					></Movies>
				</div>
			</div>
		);

		return (
			<>
				<NavBar></NavBar>
				<div style={{ paddingTop: 30 }} className="container">
					<Routes>
						<Route path="/movies">
							<Route index element={mainMarkup} />
							<Route path=":id" element={<SingleMovie />} />
						</Route>
						<Route path="/" element={<Navigate to="/movies" />} />
						<Route path="/customers" element={<Customers />} />
						<Route path="/rentals" element={<Rentals />} />
					</Routes>
				</div>
			</>
		);
	}
}
 
export default App;
