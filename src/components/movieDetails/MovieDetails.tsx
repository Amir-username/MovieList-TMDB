import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieGenreContext } from "../../contexts/MovieGenreContext";
import { Genre } from "../../models/Genre";
import { ImageUrl } from "../../requestConfig";
import MovieBackDrop from "./MovieBackDrop";
import MovieDetailsContent from "./MovieDetailsContent";


function MovieDetails() {
  const location = useLocation();
  const movie = location.state;

  const genresContext = useContext(MovieGenreContext);

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
      <MovieBackDrop image={ImageUrl + movie.backdrop_path} />
      <MovieDetailsContent genres={genres} movie={movie} />
    </div>
  );
}

export default MovieDetails;
