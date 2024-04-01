import { Movie } from "../../models/Movie";
import MovieCarouselItem from "./MovieCarouselItem";

type MovieCarouselProps = {
  movies: Movie[];
};

function MovieCarousel({ movies }: MovieCarouselProps) {
  return (
    <div className="flex flex-col mt-8 gap-8">
      <div className="text-center text-2xl font-semibold text-gray-400">
        movies
      </div>
      <div id="no-scrollbar" className="flex overflow-scroll gap-2">
        {movies.map((movie) => {
          return <MovieCarouselItem movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default MovieCarousel;
