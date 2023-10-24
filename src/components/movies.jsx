import React, { Component } from 'react';
import MovieItem from './common/movieItem';
import { getMovies } from '../services/fakeMovieService';
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
	render() {
		const {
			movies,
			onDelete,
			onPageChange,
			itemsCount: count,
			pageSize,
			currPage,
			selectedGenre,
		} = this.props;

		if (count.length == 0) return <h6>Movies not found</h6>;

		let filteredMovies = [];
		console.log(selectedGenre)
		if (selectedGenre && selectedGenre._id) {
			filteredMovies = movies.filter(
				(m) => m.genre._id === selectedGenre._id
			);
		} else {
			filteredMovies = movies;
		}

		const newMovies = paginate(filteredMovies, currPage, pageSize);
		// console.log(newMovies);

		return (
			<React.Fragment>
				<h6>Showing {filteredMovies.length} in the database</h6>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Genre</th>
							<th scope="col">Stock</th>
							<th scope="col">Rate</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{newMovies.map((movie) => (
							<MovieItem
								key={movie._id}
								onDelete={onDelete}
								movie={movie}
							></MovieItem>
						))}
					</tbody>
				</table>
				<Pagination
					itemsCount={filteredMovies.length}
					pageSize={pageSize}
					onPageChange={onPageChange}
					currPage={currPage}
				></Pagination>
			</React.Fragment>
		);
	}
}

export default Movies;