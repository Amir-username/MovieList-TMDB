import { useEffect, useState } from "react";
import MoviesBrand from "../brand/MoviesBrand";
import Pagination from "../pagination/Pagination";
import AllMoviesContent from "./AllMoviesContent";
import { Movie } from "../../models/Movie";
import { BaseURL, options } from "../../requestConfig";
import axios from "axios";
import HomeError from "../errorPage/HomeError";
import AllMoviesLoading from "../loading/AllMoviesLoading";

function AllMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesLoading, setMoviesLoading] = useState<boolean>(false);
  const [moviesError, setMoviesError] = useState<boolean>(false);

  const [moviePage, setMoviePage] = useState<number>(1);

  useEffect(() => {
    setMoviesLoading(true);

    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          BaseURL + `/discover/movie?page=${moviePage}`,
          options
        );
        const data = await res.data;
        setMovies(data.results);
        setMoviesLoading(false);
      } catch (error: any) {
        setMoviesError(true);
        console.log(error.message);
      }
    };

    fetchMovies();
  }, [moviePage]);

  return (
    <div className="flex flex-col m-5 gap-10 mb-28 md:px-52">
      <MoviesBrand name="movies" />
      {moviesError ? (
        <HomeError />
      ) : moviesLoading ? (
        <AllMoviesLoading />
      ) : (
        <AllMoviesContent movies={movies} />
      )}
      <Pagination pageNum={moviePage} setPageNum={setMoviePage} />
    </div>
  );
}

export default AllMovies;
