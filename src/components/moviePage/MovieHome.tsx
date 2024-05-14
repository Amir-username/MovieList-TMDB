import { useEffect, useState } from "react";
import { Movie } from "../../models/Movie";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Tv } from "../../models/Tv";
import Brand from "../brand/Brand";
import MovieCarousel from "../carousel/MovieCarousel";
import TvCarousel from "../carousel/TvCarousel";
import HomeLoading from "../loading/HomeLoading";
import HomeError from "../errorPage/HomeError";

function MovieHome() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesLoading, setMoviesLoading] = useState<boolean>(false);
  const [moviesError, setMoviesError] = useState<boolean>(false);

  const [series, setSeries] = useState<Tv[]>([]);
  const [seriesLoading, setSeriesLoading] = useState<boolean>(false);
  const [seriesError, setSeriesError] = useState<boolean>(false);

  useEffect(() => {
    setMoviesLoading(true);

    const fetchMovies = async () => {
      try {
        const res = await axios.get(BaseURL + "/discove/movie?page=1", options);
        const data = await res.data;
        setMovies(data.results);
        setMoviesLoading(false);
      } catch (error: any) {
        setMoviesError(true);
        console.log(error.message);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    setSeriesLoading(true);

    const fetchTv = async () => {
      try {
        const res = await axios.get(BaseURL + "/discover/tv?page=1", options);
        const data = await res.data;

        setSeries(data.results);
        setSeriesLoading(false);
      } catch (error: any) {
        setSeriesError(true);
        console.log(error.message);
      }
    };

    fetchTv();
  }, []);

  return (
    <div className="p-5 mb-20">
      <div className="flex flex-col">
        <Brand />
        {moviesError || seriesError ? (
          <HomeError />
        ) : moviesLoading || seriesLoading ? (
          <HomeLoading />
        ) : (
          <>
            <MovieCarousel movies={movies} />
            <TvCarousel series={series} />
          </>
        )}
      </div>
    </div>
  );
}

export default MovieHome;
