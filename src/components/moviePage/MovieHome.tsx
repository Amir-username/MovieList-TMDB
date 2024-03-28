import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";
import SearchBox from "../searchBox/SearchBox";
import { Movie } from "../../models/Movie";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";

function MovieHome() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(BaseURL + "/discover/movie?page=1", options)
      .then((res) => {
        const movieList = res.data.results;
        setMovies(movieList);
      });
  }, []);

  return (
    <div>
      <SearchBox />
      <MovieList movies={movies} />
    </div>
  );
}

export default MovieHome;
