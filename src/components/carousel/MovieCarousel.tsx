import { Link } from "react-router-dom";
import { Movie } from "../../models/Movie";
import MovieCarouselItem from "./MovieCarouselItem";

type MovieCarouselProps = {
  movies: Movie[];
};

function MovieCarousel({ movies }: MovieCarouselProps) {
  return (
    <div className="flex flex-col mt-8 gap-8 md:gap-5">
      <div className="flex justify-center items-center ">
        <Link to={"movies"} state={movies}>
          <span className="text-2xl font-semibold text-gray-400">movies</span>
        </Link>
      </div>
      <div
        id="no-scrollbar"
        className="flex overflow-scroll gap-2 md:flex-wrap md:gap-8 md:justify-center"
      >
        {movies.map((movie) => {
          return <MovieCarouselItem movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default MovieCarousel;
