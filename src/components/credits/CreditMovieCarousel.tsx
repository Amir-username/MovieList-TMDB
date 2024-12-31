import { Movie } from "../../models/Movie";
import MovieCarouselItem from "../carousel/MovieCarouselItem";

type CreditMovieCarouselProps = {
  movies: Movie[];
};

function CreditMovieCarousel({ movies }: CreditMovieCarouselProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl text-center text-gray-600 dark:text-gray-400 font-title-font">
        movies
      </div>
      <div
        id="no-scrollbar"
        className="flex justify-center gap-2 overflow-scroll md:flex-wrap md:gap-8 md:pb-4"
      >
        {movies.map((movie) => {
          return <MovieCarouselItem movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default CreditMovieCarousel;
