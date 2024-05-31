import { useEffect, useState } from "react";
import Genres from "../genres/Genres";
import SearchBox from "../searchBox/SearchBox";
import { Genre } from "../../models/Genre";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Movie } from "../../models/Movie";
import SearchResult from "./SearchResult";
import { Tv } from "../../models/Tv";

function Explore() {
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [movieResults, setMovieResults] = useState<Movie[]>([]);
  const [tvResults, setTvResults] = useState<Tv[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      const genreList = res.data.genres;
      setMovieGenres(genreList);
    });
  }, []);

  return (
    <div className="flex flex-col p-5 gap-8">
      <div className="flex gap-2 items-center">
        <SearchBox
          setMovieResults={setMovieResults}
          setTvResults={setTvResults}
        />
      </div>
      {movieResults.length ? (
        <SearchResult movieResults={movieResults} tvResults={tvResults} />
      ) : (
        <div className="flex flex-col">
          <Genres genres={movieGenres} title="movie" />
        </div>
      )}
    </div>
  );
}

export default Explore;
