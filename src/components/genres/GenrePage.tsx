import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Movie } from "../../models/Movie";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import MoviesBrand from "../brand/MoviesBrand";
import Pagination from "../pagination/Pagination";

function GenrePage() {
  const location = useLocation();
  const {genre, title} = location.state;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviePage, setMoviePage] = useState<number>(1);

  useEffect(() => {
    axios
      .get(
        BaseURL +
          `/discover/${title}?page=${moviePage}&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [moviePage]);

  return (
    <div className="flex flex-col m-5 gap-8 mb-32">
      <MoviesBrand name={genre.name} />
      <AllMoviesContent movies={movies} />
      <Pagination pageNum={moviePage} setPageNum={setMoviePage} />
    </div>
  );
}

export default GenrePage;
