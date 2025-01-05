import { useEffect } from "react";
import MoviesBrand from "../brand/MoviesBrand";
import Pagination from "../pagination/Pagination";
import AllMoviesContent from "./AllMoviesContent";
import HomeError from "../errorPage/HomeError";
import AllMoviesLoading from "../loading/AllMoviesLoading";
import { useMoviesStore } from "../../store/MoviesStore";
import { useMoviePageStore } from "../../store/MoviePageStore";
import { DISCOVER_MOVIES } from "../../api/urls";

function AllMovies() {
  const { movies, moviesIsLoading, moviesIsError, fetchMovies } =
    useMoviesStore();
  const { pageNumber, setPageNumber } = useMoviePageStore();

  useEffect(() => {
    fetchMovies(DISCOVER_MOVIES + `&page=${pageNumber}`);
  }, [fetchMovies, pageNumber]);

  return (
    <div className="flex flex-col m-5 md:ml-16 gap-10 mb-28 md:px-56">
      <MoviesBrand name="movies" />
      {moviesIsError ? (
        <HomeError />
      ) : moviesIsLoading ? (
        <AllMoviesLoading />
      ) : (
        <AllMoviesContent movies={movies} />
      )}
      <Pagination pageNum={pageNumber} setPageNum={setPageNumber} />
    </div>
  );
}

export default AllMovies;
