import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";
import MovieCarouselItem from "../carousel/MovieCarouselItem";

type AllMoviesContentProps = {
  movies: Movie[] | Tv[];
};

function AllMoviesContent({ movies }: AllMoviesContentProps) {
  return (
    <div className="flex flex-wrap md:justify-start gap-5 md:gap-8 content-between justify-center">
      {movies?.map((movie) => {
        return <MovieCarouselItem movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default AllMoviesContent;
