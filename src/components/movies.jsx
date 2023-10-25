import React, { Component } from 'react';
import MovieItem from './common/movieItem';
import { getMovies } from '../services/fakeMovieService';
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
	state = {
		sortColumn: { path: "title", order: "asc" },
	};

	handleSort = (sortColumn) => {
		this.setState({ sortColumn });
	};

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

		const { sortColumn } = this.state;

		if (count.length == 0) return <h6>Movies not found</h6>;

		let filteredMovies = [];
		// console.log(selectedGenre);
		if (selectedGenre && selectedGenre._id != "-1") {
			filteredMovies = movies.filter(
				(m) => m.genre._id === selectedGenre._id
			);
		} else {
			filteredMovies = movies;
		}

		const sortedMovies = _.orderBy(
			filteredMovies,
			[sortColumn.path],
			[sortColumn.order]
		);

		const newMovies = paginate(sortedMovies, currPage, pageSize);
		// console.log(newMovies);

		return (
			<React.Fragment>
				<h6>Showing {filteredMovies.length} in the database</h6>
				<MoviesTable
					items={newMovies}
					onDelete={onDelete}
					onSort={this.handleSort}
					sortColumn={sortColumn}
				></MoviesTable>
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