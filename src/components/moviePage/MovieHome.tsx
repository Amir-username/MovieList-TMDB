import MovieCarousel from "../carousel/MovieCarousel";
import HomeLoading from "../loading/HomeLoading";
import HomeError from "../errorPage/HomeError";
import { useEffect } from "react";
import { DISCOVER_MOVIES, DISCOVER_TV } from "../../api/urls";
import { useTvStore } from "../../store/TvStore";
import { useMoviesStore } from "../../store/MoviesStore";

function MovieHome() {
  const {movies, moviesIsLoading, moviesIsError, fetchMovies} = useMoviesStore()
  const {tv, tvIsLoading, tvIsError, fetchTv} = useTvStore()

  useEffect(()=>{
    fetchMovies(DISCOVER_MOVIES)
  }, [fetchMovies])

  useEffect(()=>{
    fetchTv(DISCOVER_TV)
  }, [fetchMovies])
  
  // const {
  //   data: movies,
  //   isPending: isMoviesLoading,
  //   error: isMoviesError,
  // } = useMovie("/discover/movie?page=1", "movies");

  // const {
  //   data: series,
  //   isPending: isSeriesLoading,
  //   error: isSeriesError,
  // } = useMovie("/discover/tv?page=1&sort_by=vote_count.desc", "series");

  return (
    <div className="p-5 mb-20" >
      <div className="flex flex-col">
        {moviesIsLoading || tvIsLoading ? (
          <HomeLoading />
        ) : moviesIsError || tvIsError ? (
          <HomeError />
        ) : (
          <>
            <div
              className="flex flex-col gap-8 md:px-48 backdrop-filter backdrop-blur-lg"
              
            >
              <MovieCarousel movies={movies} title="movies"/>
              <MovieCarousel movies={tv} title="series"/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieHome;
