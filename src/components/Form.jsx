import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Form = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [search, setSearch] = useState("code");
	const [sortGoodBad, setSortGoodBad] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
			)
			.then((res) => setMoviesData(res.data.results));
	}, [search]);

	return (
		<div className="form-component">
			<div className="form-container">
				<form>
					<input
						type="text"
						placeholder="Entrez le titre d'un film"
						id="search-input"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<input type="submit" value="Recherchez" />
				</form>
				<div className="btn-sort-container">
					<div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>
						Top <i className="fa-solid fa-arrow-up"></i>
					</div>
					<div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>
						Flop <i className="fa-solid fa-arrow-down"></i>
					</div>
				</div>
			</div>
			<div className="result">
				{moviesData
					.slice(0, 12)
					.sort((a, b) => {
						if (sortGoodBad === "goodToBad") {
							return b.vote_average - a.vote_average;
						} else if (sortGoodBad === "badToGood") {
							return a.vote_average - b.vote_average;
						}
					})
					.map((movie) => (
						<Card movie={movie} key={movie.id} />
					))}
			</div>
		</div>
	);
};

export default Form;
