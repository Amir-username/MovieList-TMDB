import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieGenreContext } from "../../contexts/MovieGenreContext";
import { Genre } from "../../models/Genre";
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

  return <MovieDetailsContent genres={genres} movie={movie} />;
}

export default MovieDetails;
