import { Movie } from "../../models/Movie";
import MovieCarouselItem from "./MovieCarouselItem";

type MovieCarouselProps = {
  movies: Movie[];
};

function MovieCarousel({ movies }: MovieCarouselProps) {
  return (
    <div id="no-scrollbar" className="flex overflow-scroll gap-2 mt-8">
      {movies.map((movie) => {
        return <MovieCarouselItem movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default MovieCarousel;
