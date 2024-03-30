import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";
import { Movie } from "../../models/Movie";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Tv } from "../../models/Tv";
import TvList from "../tvList/TvList";

function MovieHome() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Tv[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/discover/movie?page=1", options).then((res) => {
      const movieList = res.data.results;
      setMovies(movieList);
    });
  }, []);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/tv?page=1').then((res) => {
      const tvList = res.data.results;
      setSeries(tvList);
    });
  }, []);

  return (
    <div>
      <h1>movies</h1>
      <MovieList movies={movies} />
      <h1>series</h1>
      <TvList series={series} />
    </div>
  );
}

export default MovieHome;
