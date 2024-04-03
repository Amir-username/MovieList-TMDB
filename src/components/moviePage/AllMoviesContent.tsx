import { Movie } from "../../models/Movie";
import AllMovieItem from "./AllMovieItem";

type AllMoviesContentProps = {
  movies: Movie[];
};

function AllMoviesContent({ movies }: AllMoviesContentProps) {
  return (
    <div className="flex flex-wrap justify-center gap-5 content-between">
      {movies.map((movie) => {
        return <AllMovieItem movie={movie} key={movie.id}/>;
      })}
    </div>
  );
}

export default AllMoviesContent;
