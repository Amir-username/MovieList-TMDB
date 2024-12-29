import { useEffect, useState } from "react";
import Genres from "../genres/Genres";
import SearchBox from "../searchBox/SearchBox";
import { Genre } from "../../models/Genre";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Movie } from "../../models/Movie";
import SearchResult from "./SearchResult";
import { Tv } from "../../models/Tv";
import { Credit } from "../../models/Credit";

function Explore() {
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [movieResult, setMovieResult] = useState<Movie[]>([]);
  const [tvResult, setTvResult] = useState<Tv[]>([]);
  const [personResult, setPersonResult] = useState<Credit[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      const genreList = res.data.genres;
      setMovieGenres(genreList);
    });
  }, []);

  return (
    <div className="flex flex-col p-5 gap-8 md:gap-16 md:px-32">
      <div className="flex gap-2 items-center justify-center">
        <SearchBox
          setMovieResult={setMovieResult}
          setTvResult={setTvResult}
          setPersonResult={setPersonResult}
        />
      </div>
      {movieResult.length && tvResult.length && personResult.length ? (
        <SearchResult
          movieResult={movieResult}
          tvResult={tvResult}
          personResult={personResult}
        />
      ) : (
        <div className="flex flex-col md:px-52">
          <Genres genres={movieGenres} title="movie" />
        </div>
      )}
    </div>
  );
}

export default Explore;
