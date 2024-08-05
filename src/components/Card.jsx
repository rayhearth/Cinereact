import React from "react";

const Card = ({ movie }) => {
	const dateFormateur = (date) => {
		let [yy, mm, dd] = date.split("-");
		return [dd, mm, yy].join("/");
	};

	return (
		<div className="card">
			<img
				src={
					movie.poster_path
						? "https://image.tmdb.org/t/p//original" + movie.poster_path
						: "./poster.jpg"
				}
				alt={`affiche de" + ${movie.title}`}
			/>
			<h2>{movie.title}</h2>
			{movie.release_date ? (
				<h5>Sorti le : {dateFormateur(movie.release_date)}</h5>
			) : null}
			<h4>
				{movie.vote_average}/10 <i class="fa-solid fa-star"></i>
			</h4>
		</div>
	);
};

export default Card;
