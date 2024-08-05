import React from "react";

const Card = ({ movie }) => {
	return (
		<div className="card">
			<img
				src={
					movie.poster_path
						? "https://image.tmdb.org/t/p/original" + movie.poster_path
						: "./poster.jpg"
				}
				alt={`affiche" + ${movie.title}`}
			/>
		</div>
	);
};

export default Card;
