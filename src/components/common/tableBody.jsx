import React, { Component } from "react";
import MovieItem from "./movieItem";
import NavBar from "../navBar";

class TableBody extends Component {
	render() {
		return (
			<>
				<tbody>
					{this.props.data.map((movie) => (
						<MovieItem
							key={movie._id}
							onDelete={this.props.onDelete}
							movie={movie}
						></MovieItem>
					))}
				</tbody>
			</>
		);
	}
}

export default TableBody;
