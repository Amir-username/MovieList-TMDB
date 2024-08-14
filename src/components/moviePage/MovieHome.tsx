import Brand from "../brand/Brand";
import MovieCarousel from "../carousel/MovieCarousel";
import TvCarousel from "../carousel/TvCarousel";
import HomeLoading from "../loading/HomeLoading";
import HomeError from "../errorPage/HomeError";
import { useMovie } from "../../hooks/useMovie";
import Theme from "../brand/Theme";

function MovieHome() {

  const {
    data: movies,
    isPending: isMoviesLoading,
    error: isMoviesError,
  } = useMovie("/discover/movie?page=1", 'movies');

  const {
    data: series,
    isPending: isSeriesLoading,
    error: isSeriesError
  } = useMovie("/discover/tv?page=1&sort_by=vote_count.desc", 'series')

  return (
    <div className="p-5 mb-20">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <Brand />
          <Theme />
        </div>
        {isMoviesLoading || isSeriesLoading ? (
          <HomeLoading />
        ) : isMoviesError || isSeriesError ? (
          <HomeError />
        ) : (
          <>
            <div className="flex flex-col gap-8 md:px-52">
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
