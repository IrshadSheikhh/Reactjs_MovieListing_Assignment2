
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"

import MovieCard from "./MovieCard";

const Home = () => {
	const [movies, setMovies] = useState([]);



	useEffect(() => {
		axios.get('http://localhost:5000/api/movies')
		.then(
			response => {
				setMovies(response.data.movies)
			}
			
		)
		.catch(error => {
			console.log(error);
		})
	}, []);

	return (
		<div className="container">
			<h1 >Movie Listing</h1>

			<div className="row">
				{ movies.map(movie =>
				(
					<div className="col-md-4 mb-4" key={movie.name}>
					 <MovieCard movie={movie}/>

					</div>
				))}
			</div>
			</div> );
};

export default Home;