import { BaseURL, options } from "../requestConfig";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useMovie(query: string, queryKey: string) {
  const fetchMovies = async () => {
    const res = await axios.get(BaseURL + query, options);
    const data = await res.data;

    return data.results;
  };

  const { data, isPending, error } = useQuery({
    queryKey: [queryKey],
    queryFn: fetchMovies,
  });

  return { data, isPending, error };
}
