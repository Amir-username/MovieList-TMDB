import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";

type MovieDetailsContentProps = {
  movie: Movie;
};

function MovieDetailsContent({ movie }: MovieDetailsContentProps) {
  console.log(movie);
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <img
        src={ImageUrl + movie.poster_path}
        alt="movie poster"
        className="w-64 h-96"
      />
      {movie.genres?.map((genre) => {
        return <p key={genre.id}>{genre.name}</p>;
      })}
      <span>{movie.release_date}</span>
    </div>
  );
}

export default MovieDetailsContent;
