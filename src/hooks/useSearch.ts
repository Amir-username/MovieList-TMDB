import { useEffect } from "react";
import axios from "axios";
import { BaseURL } from "../requestConfig";

export function useSearch(
  query: string,
  type: string,
  setResult: React.Dispatch<React.SetStateAction<any[]>>
) {
  useEffect(() => {
    const abortController = new AbortController();

    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          BaseURL + `/search/${type}?query=${query}&page=1&include_adult=false`,
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
        setResult(data.results);
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
  }, [query]);
}
