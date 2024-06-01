import { Movie } from "../../models/Movie";
import MovieCarouselItem from "../carousel/MovieCarouselItem";

type CreditMovieCarouselProps = {
    movies: Movie[]
}

function CreditMovieCarousel({movies}: CreditMovieCarouselProps) {
  return (
    <div id="no-scrollbar" className="flex overflow-scroll gap-2">
      {movies.map((movie) => {
        return <MovieCarouselItem movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default CreditMovieCarousel;
