import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Movie } from "../../models/Movie";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import MoviesBrand from "../brand/MoviesBrand";

function GenrePage() {
  const location = useLocation();
  const {genre, title} = location.state;

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(
        BaseURL +
          `/discover/${title}?page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div className="flex flex-col m-5 gap-8">
      <MoviesBrand name={genre.name} />
      <AllMoviesContent movies={movies} />
    </div>
  );
}

export default GenrePage;
