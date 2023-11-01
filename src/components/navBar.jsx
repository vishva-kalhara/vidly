import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const { pathname } = useLocation();

	const putActive = (link) => {
		if (pathname === link) return "nav-link  active";
		return "nav-link";
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Vidly
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className={putActive("/movies")}
								aria-current="page"
								to="/movies"
							>
								Movies
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={putActive("/customers")}
								to="/customers"
							>
								Customers
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={putActive("/rentals")}
								to="/rentals"
							>
								Rentals
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
