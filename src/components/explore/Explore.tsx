import { useEffect, useState } from "react";
import Genres from "../genres/Genres";
import SearchBox from "../searchBox/SearchBox";
import { Genre } from "../../models/Genre";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Movie } from "../../models/Movie";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import SearchResult from "./SearchResult";

function Explore() {
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [tvGenres, setTvGenres] = useState<Genre[]>([]);

  const [movieResults, setMovieResults] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      const genreList = res.data.genres;
      setMovieGenres(genreList);
    });
  }, []);

  useEffect(() => {
    axios.get(BaseURL + "/genre/tv/list", options).then((res) => {
      const genreList = res.data.genres;
      setTvGenres(genreList);
    });
  }, []);

  return (
    <div className="flex flex-col p-5 gap-8">
      <div className="flex gap-2 items-center">
        <SearchBox setMovieResults={setMovieResults} />
      </div>
      {movieResults.length ? (
        <SearchResult movieResults={movieResults}/>
      ) : (
        <div className="flex flex-col">
          <Genres genres={movieGenres} title="movie" />
          <Genres genres={tvGenres} title="tv" />
        </div>
      )}
    </div>
  );
}

export default Explore;
