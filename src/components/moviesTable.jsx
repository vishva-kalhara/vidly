import React, { Component } from "react";
import MovieItem from "./common/movieItem";

class MoviesTable extends Component {
	raiseSort = (selSort) => {
		let sortColumn = { ...this.props.sortColumn };
		if (this.props.sortColumn.path === selSort) {
			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		} else {
			sortColumn.path = selSort;
			sortColumn.order = "asc";
		}

		this.props.onSort(sortColumn);
	};

	render() {
		const { items: newMovies, onDelete } = this.props;

		return (
			<table className="table">
				<thead>
					<tr>
						<th onClick={() => this.raiseSort("title")} scope="col">
							Title
						</th>
						<th
							onClick={() => this.raiseSort("genre.name")}
							scope="col"
						>
							Genre
						</th>
						<th
							onClick={() => this.raiseSort("numberInStock")}
							scope="col"
						>
							Stock
						</th>
						<th
							onClick={() => this.raiseSort("dailyRentalRate")}
							scope="col"
						>
							Rate
						</th>
						<th onClick={() => this.raiseSort()} scope="col"></th>
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
		);
	}
}

export default MoviesTable;
