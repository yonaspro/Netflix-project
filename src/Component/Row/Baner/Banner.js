import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../../axios";
import requsts from "../../../requests";
const Banner = () => {
	const [movie, setmovies] = useState([]);
	useEffect(() => {
		async function fetchdata() {
			const requst = await axios.get(requsts.fetchNetfkeixOriginal);
			setmovies(
				requst?.data.results[
					Math.floor(Math.random() * requst.data.results.length)
				]
			);

			return requst;
		}
		fetchdata();
	}, []);
	const trancate = (str, num) => {
		return str?.length > num ? str.substr(0, num - 1) + "..." : str;
	};
	return (
		<div>
			<header
				className="banner"
				style={{
					backgroundSize: "cover",

					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
					backgroundposition: "center",
				}}>
				<div className="banner__contents">
					<h1 className="banner__title">
						{movie.title || movie.name || movie.original_name}
					</h1>
					<div className="banner__buttoms">
						<button className="banner__buttom">Play</button>
						<button className="banner__buttom">My List</button>
					</div>
					<h1 className="banner__description">
						{trancate(movie?.overview, 150)}
					</h1>
				</div>
				<div className="banner__fadebuttun"></div>
			</header>
		</div>
	);
};

export default Banner;
