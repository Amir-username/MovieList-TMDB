import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";
import SearchBox from "../searchBox/SearchBox";
import { Movie } from "../../models/Movie";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Genre } from "../../models/Genre";
import Genres from "../genres/Genres";

function MovieHome() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    axios
      .get(BaseURL + "/discover/movie?page=1", options)
      .then((res) => {
        const movieList = res.data.results;
        setMovies(movieList);
      });
  }, []);

  // https://api.themoviedb.org/3/genre/movie/list

  useEffect(() => {
    axios
      .get(BaseURL + "/genre/movie/list", options)
      .then((res) => {
        const genreList = res.data.genres;
        setGenres(genreList);
      });
  }, []);

  return (
    <div>
      <SearchBox />
      <MovieList movies={movies} />
      <div>-------------------------------------------------------------</div>
      <Genres genres={genres} />
    </div>
  );
}

export default MovieHome;
