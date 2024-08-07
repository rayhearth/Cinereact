import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const Favoris = () => {
	const [listData, setListData] = useState([]);

	useEffect(() => {
		let isMounted = true;

		let moviesId = window.localStorage.movies
			? window.localStorage.movies.split(",")
			: [];

		const fetchMovies = async () => {
			for (let i = 0; i < moviesId.length; i++) {
				const res = await axios.get(
					`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
				);
				if (isMounted) {
					setListData((prevListData) => [...prevListData, res.data]);
				}
			}
		};

		fetchMovies();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="favoris-page">
			<Header />
			<h2>
				Favoris <i className="fa-solid fa-heart"></i>
			</h2>
			<div className="result">
				{listData.length > 0 ? (
					listData.map((movie) => <Card movie={movie} key={movie.id} />)
				) : (
					<h2>Aucun Favoris pour le moment</h2>
				)}
			</div>
		</div>
	);
};

export default Favoris;
