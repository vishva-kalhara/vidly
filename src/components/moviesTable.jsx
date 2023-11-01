import React, { Component } from "react";
import MovieItem from "./common/movieItem";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
	columns = [
		{ path: "title", label: "Title" },
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{ key: "like" },
		{ key: "delete" },
	];

	render() {
		const { items: newMovies, onDelete, onSort, sortColumn } = this.props;

		return (
			<table className="table">
				<TableHeader
					sortColumn={sortColumn}
					onSort={onSort}
					columns={this.columns}
				></TableHeader>
				<TableBody data={newMovies} onDelete={onDelete}></TableBody>
			</table>
		);
	}
} 

export default MoviesTable;
