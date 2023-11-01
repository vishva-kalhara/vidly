import React, { Component } from "react";

class TableHeader extends Component {
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
		const { columns } = this.props;

		return (
			<thead>
				<tr>
					{columns.map((column) => (
						<th
							key={column.path || column.key}
							onClick={() => this.raiseSort(column.path)}
							scope="col"
						>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
