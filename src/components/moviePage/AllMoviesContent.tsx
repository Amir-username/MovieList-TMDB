import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";
import AllMovieItem from "./AllMovieItem";

type AllMoviesContentProps = {
  movies: Movie[] | Tv[];
};

function AllMoviesContent({ movies }: AllMoviesContentProps) {
  return (
    <div className="flex flex-wrap justify-start gap-5 content-between">
      {movies?.map((movie) => {
        return <AllMovieItem movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default AllMoviesContent;
