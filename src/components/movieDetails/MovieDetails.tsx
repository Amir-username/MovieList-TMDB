import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieGenreContext } from "../../contexts/MovieGenreContext";
import { Genre } from "../../models/Genre";
import { ImageUrl } from "../../requestConfig";

function MovieDetails() {
  const location = useLocation();
  const movie = location.state;

  const genresContext = useContext(MovieGenreContext);

  console.log(movie);

  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const movieGenres: Genre[] = [];
    genresContext.map((genre) => {
      movie.genre_ids.map((id: number) => {
        if (genre.id === id) movieGenres.push(genre);
      });
    });

    setGenres(movieGenres);
  }, []);

  return (
    <div className="flex flex-col">
      <img
        src={ImageUrl + movie.backdrop_path}
        alt="movie poster"
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col p-1 gap-8">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col p-2 gap-4">
            <div className="text-4xl font-semibold text-gray-800 mb-6">
              {movie.title}
            </div>
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
      </div>
    </div>
  );
}

export default MovieDetails;
