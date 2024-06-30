import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL } from "../../requestConfig";
import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";

type SearchBoxProps = {
  setMovieResults: React.Dispatch<React.SetStateAction<Movie[]>>;
  setTvResults: React.Dispatch<React.SetStateAction<Tv[]>>;
};

function SearchBox({ setMovieResults, setTvResults }: SearchBoxProps) {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          BaseURL + `/search/movie?query=${search}&page=1&include_adult=false`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBlMDc5MDVlMmY0OTZhYTc1ODllZDdiYmUwOTI5NCIsInN1YiI6IjY2Mzc5YTJiMGMxMjU1MDEyNjdkNzE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADu5IS26w5oary4tusBB-YeP5_QFkl-PE2zjiq6TtjY",
            },
            signal: abortController.signal,
          }
        );

        const data = await res.data;
        setMovieResults(data.results);
      } catch (error: any) {
        if (error.name !== "CanceledError") {
          console.log("error:", error);
        }
      }
    };

    fetchMovies();

    return () => {
      abortController.abort();
    };
  }, [search]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          BaseURL + `/search/tv?query=${search}&page=1&include_adult=false`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBlMDc5MDVlMmY0OTZhYTc1ODllZDdiYmUwOTI5NCIsInN1YiI6IjY2Mzc5YTJiMGMxMjU1MDEyNjdkNzE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADu5IS26w5oary4tusBB-YeP5_QFkl-PE2zjiq6TtjY",
            },
            signal: abortController.signal,
          }
        );

        const data = await res.data;
        setTvResults(data.results);
      } catch (error: any) {
        if (error.name !== "CanceledError") {
          console.log("error:", error);
        }
      }
    };

    fetchMovies();

    return () => {
      abortController.abort();
    };
  }, [search]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-center w-full md:w-96">
      <div className="relative">
        <span className="text-xl top-0.5 absolute inset-y-0 start-0 flex items-center ps-3 material-symbols-outlined text-gray-400">
          search
        </span>
      </div>
      <input
        onChange={onSearch}
        className="dark:bg-gray-900 placeholder:text-gray-400 pl-10 text-gray-600 dark:text-gray-300 ring-1
         focus:outline-none border-0 focus:ring-2 focus:ring-primary-dark
         ring-gray-300 dark:ring-primary-dark p-4 rounded-full w-full"
        placeholder="search movies"
      />
    </div>
  );
}

export default SearchBox;
