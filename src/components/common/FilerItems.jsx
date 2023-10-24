import React, { Component } from "react";

const FilerItems = (props) => {
	const {
		textProperty,
		valueProperty,
		selectedGenre,
		items,
		onChangeFilter,
	} = props;

	return (
		<ul className="list-group">
			{items.map((item) => (
				<li
					key={item[valueProperty]}
					onClick={() => onChangeFilter(item)}
					className={`list-group-item ${
						selectedGenre[textProperty] === item[textProperty]
							? "active"
							: ""
					}`}
				>
					{item[textProperty]}
				</li>
			))}
		</ul>
	);
};

FilerItems.defaultProps = {
	textProperty: "name",
	valueProperty: "_id",
};

export default FilerItems;
