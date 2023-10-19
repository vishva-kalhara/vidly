/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import _ from "lodash";
import PropTypes from 'prop-types';

const Pagination = (props) => {
	const { itemsCount, pageSize, onPageChange, currPage } = props;

	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;

	const pages = _.range(1, pagesCount + 1);

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				{pages.map((page) => (
					<li
						style={{ cursor: "pointer" }}
						key={page}
						className={
							currPage === page ? "page-item active" : "page-item"
						}
					>
						<a
							onClick={() => {
								onPageChange(page);
							}}
							className="page-link"
						>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

Pagination.propType = {
	itemCount : PropTypes.number.isRequired,
	pageSize : PropTypes.number.isRequired,
	currPage : PropTypes.number.isRequired,
	onPageChange : PropTypes.func.isRequired,
}

export default Pagination;
