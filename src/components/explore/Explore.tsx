import { useState } from "react";
import Genres from "../genres/Genres";
import SearchBox from "../searchBox/SearchBox";
import { Movie } from "../../models/Movie";
import SearchResult from "./SearchResult";
import { Tv } from "../../models/Tv";
import { Credit } from "../../models/Credit";

function Explore() {
  const [movieResult, setMovieResult] = useState<Movie[]>([]);
  const [tvResult, setTvResult] = useState<Tv[]>([]);
  const [personResult, setPersonResult] = useState<Credit[]>([]);

  return (
    <div className="flex flex-col gap-12 p-5 md:gap-16 md:px-32">
      <div className="flex items-center justify-center gap-2">
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
          <Genres type="movie" />
        </div>
      )}
    </div>
  );
}

export default Explore;
