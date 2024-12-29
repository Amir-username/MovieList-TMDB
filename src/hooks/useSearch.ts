import axios from "axios";
import { BaseURL, options } from "../requestConfig";
import { useEffect } from "react";

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
            ...options,
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

