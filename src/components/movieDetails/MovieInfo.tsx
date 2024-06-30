import { Genre } from "../../models/Genre";
import { Movie } from "../../models/Movie";
import MovieTitle from "./MovieTitle";

type MovieInfoProps = {
  movie: Movie;
  genres: Genre[]
};

function MovieInfo({ movie, genres }: MovieInfoProps) {
  return (
    <div className="flex flex-col p-2 gap-4">
      <MovieTitle title={movie.title} />
      <div className="flex gap-2 items-center">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          calendar_today
        </span>
        <div className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          {movie.release_date}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          theater_comedy
        </span>
        <div className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          {genres.map((genre) => {
            return <span key={genre.id}>{genre.name} </span>;
          })}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          language
        </span>
        <div className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          {movie.original_language.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
