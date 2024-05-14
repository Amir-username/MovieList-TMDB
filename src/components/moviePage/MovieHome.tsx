import { useState } from "react";
import { Movie } from "../../models/Movie";

import { Tv } from "../../models/Tv";
import Brand from "../brand/Brand";
import MovieCarousel from "../carousel/MovieCarousel";
import TvCarousel from "../carousel/TvCarousel";
import HomeLoading from "../loading/HomeLoading";
import HomeError from "../errorPage/HomeError";
import { useMovie } from "../../hooks/useMovie";


function MovieHome() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesLoading, setMoviesLoading] = useState<boolean>(false);
  const [moviesError, setMoviesError] = useState<boolean>(false);

  const [series, setSeries] = useState<Tv[]>([]);
  const [seriesLoading, setSeriesLoading] = useState<boolean>(false);
  const [seriesError, setSeriesError] = useState<boolean>(false);

  useMovie(
    "/discover/movie?page=1",
    setMovies,
    setMoviesLoading,
    setMoviesError
  );

  useMovie("/discover/tv?page=1", setSeries, setSeriesLoading, setSeriesError);

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
