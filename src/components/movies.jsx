import React, { Component } from 'react';
import MovieItem from './common/movieItem';
import { getMovies } from '../services/fakeMovieService';
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
	render() {
		const { movies,  onDelete, onPageChange, itemsCount : count, pageSize, currPage } =
			this.props;

		if (count == 0) return <h6>Movies not found</h6>;

		const newMovies = paginate(movies, currPage, pageSize);
		// console.log(newMovies);

		return (
			<React.Fragment>
				<h6>Showing {count} in the database</h6>
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
					itemsCount={count}
					pageSize={pageSize}
					onPageChange={onPageChange}
					currPage={currPage}
				></Pagination>
			</React.Fragment>
		);
	}
}

export default Movies;