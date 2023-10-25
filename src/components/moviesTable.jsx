import React from "react";
import MovieItem from "./common/movieItem";

const MoviesTable = (props) => {
	const { items: newMovies, onDelete, onSort } = props;
	// console.log("bhjs  " ,newMovies);

	return (
		<table className="table">
			<thead>
				<tr>
					<th onClick={() => onSort("title")} scope="col">
						Title
					</th>
					<th onClick={() => onSort("genre.name")} scope="col">
						Genre
					</th>
					<th onClick={() => onSort("numberInStock")} scope="col">
						Stock
					</th>
					<th onClick={() => onSort("dailyRentalRate")} scope="col">
						Rate
					</th>
					<th onClick={() => onSort()} scope="col"></th>
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
};

export default MoviesTable;
