import { Movie } from "../../models/Movie";

type MovieListProps = {
  movies: Movie[];
};

function MovieList({ movies }: MovieListProps) {
  return (
    <div>
      {movies.map((movie: Movie) => {
        return <p key={movie.id}>{movie.title}</p>;
      })}
    </div>
  );
}

export default MovieList;
