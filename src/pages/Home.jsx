import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../components/Header';
import Form from '../components/Form';

const Home = () => {

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
    <div className='home-page'>
      <Header/>
      <Form/>
      {/* <ul>
        {
          data.map((film, index) => {
            <Card key={index} film={film}/>
          })
        }
      </ul> */}
    </div>
  );
};

export default Home;