import { useEffect } from "react";
import { BaseURL, options } from "../requestConfig";
import axios from "axios";

export function useMovie(
  query: string,
  setState: React.Dispatch<React.SetStateAction<any>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    setLoading(true);

    const fetchMovies = async () => {
      try {
        const res = await axios.get(BaseURL + query, options);
        const data = await res.data;
        setState(data.results);
        setLoading(false);
      } catch (error: any) {
        setError(true);
        console.log(error.message);
      }
    };

    fetchMovies();
  }, []);
}
