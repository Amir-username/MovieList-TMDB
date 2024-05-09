import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Genre } from "../../models/Genre";
import MovieBackDrop from "../movieDetails/MovieBackDrop";
import { TvGenreContext } from "../../contexts/TvGenreContext";
import { ImageUrl } from "../../requestConfig";
import TvDetailsContent from "./TvDetailsContent";

function TvDetails() {
    const location = useLocation();
    const tv = location.state;
  
    const genresContext = useContext(TvGenreContext);
  
    const [genres, setGenres] = useState<Genre[]>([]);
  
    useEffect(() => {
      const tvGenres: Genre[] = [];
      genresContext.map((genre) => {
        tv.genre_ids.map((id: number) => {
          if (genre.id === id) tvGenres.push(genre);
        });
      });
  
      setGenres(tvGenres);
    }, []);
  
    return (
      <div className="flex flex-col">
        <MovieBackDrop image={ImageUrl + tv.backdrop_path} />
        <TvDetailsContent genres={genres} tv={tv} />
      </div>
    );
}

export default TvDetails;