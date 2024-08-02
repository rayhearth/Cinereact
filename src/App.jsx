import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favoris from "./pages/Favoris";
import NotFound from "./pages/NotFound";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
			)
			.then((res) => {
				if (res.data && res.data.results) {
					setData(res.data.results);
					console.log(res);
				}
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favoris" element={<Favoris />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
