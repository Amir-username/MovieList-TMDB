import { Movie } from "../../models/Movie";
import MovieCarouselItem from "../carousel/MovieCarouselItem";

type CreditMovieCarouselProps = {
    movies: Movie[]
}

function CreditMovieCarousel({movies}: CreditMovieCarouselProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-left text-3xl text-gray-600 dark:text-gray-400 font-title-font">movies</div>
      <div id="no-scrollbar" className="flex overflow-scroll gap-2">
      {movies.map((movie) => {
        return <MovieCarouselItem movie={movie} key={movie.id} />;
      })}
    </div>
    </div>
  );
}

export default CreditMovieCarousel;
