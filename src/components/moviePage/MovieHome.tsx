import MovieCarousel from "../carousel/MovieCarousel";
import TvCarousel from "../carousel/TvCarousel";
import HomeLoading from "../loading/HomeLoading";
import HomeError from "../errorPage/HomeError";
import { useMovie } from "../../hooks/useMovie";

function MovieHome() {
  const {
    data: movies,
    isPending: isMoviesLoading,
    error: isMoviesError,
  } = useMovie("/discover/movie?page=1", "movies");

  const {
    data: series,
    isPending: isSeriesLoading,
    error: isSeriesError,
  } = useMovie("/discover/tv?page=1&sort_by=vote_count.desc", "series");

  return (
    <div className="p-5 mb-20" >
      <div className="flex flex-col">
        {isMoviesLoading || isSeriesLoading ? (
          <HomeLoading />
        ) : isMoviesError || isSeriesError ? (
          <HomeError />
        ) : (
          <>
            <div
              className="flex flex-col gap-8 md:px-48 backdrop-filter backdrop-blur-lg"
              
            >
              <MovieCarousel movies={movies} />
              <TvCarousel series={series} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieHome;
