const Api_key = "0016f7d1a9e0b157af7603b039c73886"
const requsts = {
    fatchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
    fetchNetfkeixOriginal: `/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTopRetedMovies: `movie/top_rated?api_key=${Api_key}&language=en-US`,
    fatchActionMoves: `/discover/movie?api_key=${Api_key}&with_genres=28`,
    FatchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    FatchHorrerMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    FatchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    FatchDocmentories:`/discover/movie?api_key=${Api_key}&with_genres=99`
}

export default requsts;