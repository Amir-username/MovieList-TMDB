import { Genre } from "../../models/Genre";
import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";
import MovieTitle from "./MovieTitle";

import STAR from "../../assets/svg/STAR.svg";

type MovieDetailsContentProps = {
  movie: Movie;
  genres: Genre[];
};

function MovieDetailsContent({ movie, genres }: MovieDetailsContentProps) {
  return (
    <div className="flex flex-col p-1 gap-8 mb-32">
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col p-2 gap-4">
          <MovieTitle title={movie.title} />
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-emerald-700 text-xl">
              calendar_today
            </span>
            <div className="font-semibold text-gray-600 text-lg">
              {movie.release_date}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-emerald-700 text-xl">
              theater_comedy
            </span>
            <div className="font-semibold text-gray-600 text-lg">
              {genres.map((genre) => {
                return <span key={genre.id}>{genre.name} </span>;
              })}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-emerald-700 text-xl">
              language
            </span>
            <div className="font-semibold text-gray-600 text-lg">
              {movie.original_language.toUpperCase()}
            </div>
          </div>
        </div>
        <img
          src={ImageUrl + movie.poster_path}
          alt="movie poster"
          className="w-36 h-52 ring-1 ring-gray-100 rounded-sm"
        />
      </div>
      <div className="p-2 text-lg text-gray-800">{movie.overview}</div>
      <div className="flex gap-1 items-center justify-center">
        <img src={STAR} alt="vote" className="w-10 h-10" />
        <span className="text-3xl text-gray-500 font-semibold">
          {movie.vote_average.toString().length > 4
            ? movie.vote_average.toString().slice(0, -2)
            : movie.vote_average.toString().slice(0, -1)}
        </span>
      </div>
    </div>
  );
}

export default MovieDetailsContent;

// #F19E39
