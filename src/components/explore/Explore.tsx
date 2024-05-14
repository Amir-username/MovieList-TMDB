import { useEffect, useState } from "react";
import Genres from "../genres/Genres";
import SearchBox from "../searchBox/SearchBox";
import { Genre } from "../../models/Genre";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import { Movie } from "../../models/Movie";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import { Tv } from "../../models/Tv";

function Explore() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movieResults, setMovieResults] = useState<Movie[]>([]);
  const [tvResults, setTvResults] = useState<Tv[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      const genreList = res.data.genres;
      setGenres(genreList);
    });
  }, []);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      const genreList = res.data.genres;
      setGenres(genreList);
    });
  }, []);

  return (
    <div className="flex flex-col p-5 gap-8">
      <SearchBox setMovieResults={setMovieResults} />
      {movieResults.length ? (
        <AllMoviesContent movies={movieResults} />
      ) : (
        <Genres genres={genres} />
      )}
    </div>
  );
}

export default Explore;
