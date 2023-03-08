import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const my_base = "https://image.tmdb.org/t/p/w200/";
const Row = ({ title, fetchurl, islarge }) => {
	const [movies, setmovies] = useState([]);
	const [trailer, settrailer] = useState("");
	useEffect(() => {
		async function fetchdata() {
			const requst = await axios.get(fetchurl);
			setmovies(requst.data.results);
			// console.log(requst.data.results);
			return requst;
		}
		fetchdata();
	}, [fetchurl]);

	const opts = {
		height: "398",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	const handleclick = (movie) => {
		if (trailer) {
			settrailer("");
		} else {
			movieTrailer(movie?.title || movie.name || movie.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					settrailer(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};
	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						onClick={() => handleclick(movie)}
						className={`row__poster ${islarge && "row__posterLarge"}`}
						src={`${my_base}${
							islarge ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			<div style={{ padding: "40px" }}>
				{trailer && <YouTube videoId={trailer} opts={opts} />}
			</div>
		</div>
	);
};

export default Row;
