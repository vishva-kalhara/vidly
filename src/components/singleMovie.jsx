import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleMovie = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const handleSave = () => {
		navigate("/movies", { replace: true });
	};

	return (
		<>
			<h1>Movie id is {id}</h1>
			<button
				onClick={handleSave}
				style={{ marginTop: "24px" }}
				className="btn btn-primary"
			>
				Save
			</button>
		</>
	);
};

export default SingleMovie;
