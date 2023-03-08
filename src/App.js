import React from "react";
import "./App.css";
import Banner from "./Component/Row/Baner/Banner";
import Nav from "./Component/Row/nav/Nav";
import Row from "./Component/Row/row/Row";
import requsts from "./requests";

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchurl={requsts.fetchNetfkeixOriginal}
				islarge
			/>
			<Row title="Trending Now" fetchurl={requsts.fatchTrending} />

			<Row title="Top Reted" fetchurl={requsts.fetchTopRetedMovies} />

			<Row title="Action Movies" fetchurl={requsts.fatchActionMoves} />

			<Row title="Comedy Movies" fetchurl={requsts.FatchComedyMovies} />

			<Row title="Horror Movies" fetchurl={requsts.FatchHorrerMovies} />

			<Row title="Romance Movies " fetchurl={requsts.FatchRomanceMovies} />

			<Row title="Documentaries Movies " fetchurl={requsts.FatchDocmentories} />
		</div>
	);
}

export default App;
