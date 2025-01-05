import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import AllMoviesContent from "../moviePage/AllMoviesContent";
import MoviesBrand from "../brand/MoviesBrand";
import Pagination from "../pagination/Pagination";
import { useMoviesStore } from "../../store/MoviesStore";
import { DISCOVER_MOVIES } from "../../api/urls";
import { useMoviePageStore } from "../../store/MoviePageStore";

function GenrePage() {
  const location = useLocation();
  const { genre } = location.state;

  const { movies, fetchMovies } = useMoviesStore();
  const { pageNumber, setPageNumber } = useMoviePageStore();

  useEffect(() => {
    fetchMovies(
      DISCOVER_MOVIES + `&page=${pageNumber}&with_genres=${genre.id}`
    );
  }, [fetchMovies, genre, pageNumber]);

  return (
    <div className="flex flex-col m-5 gap-8 mb-32 md:px-52">
      <MoviesBrand name={genre.name} />
      <AllMoviesContent movies={movies} />
      <Pagination pageNum={pageNumber} setPageNum={setPageNumber} />
    </div>
  );
}

export default GenrePage;
