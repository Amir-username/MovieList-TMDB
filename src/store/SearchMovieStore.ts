
import { create } from "zustand";
import { Movie } from "../models/Movie";
import { fetchSearchMovie } from "../api/fetchSearchMovie";

type SearchMoviesState = {
  movies: Movie[];
  moviesIsLoading: boolean;
  fetchSearchMovies: (
    query: string,
    signal: AbortSignal,
    page: number
  ) => Promise<void>;
};

export const useSearchMoviesStore = create<SearchMoviesState>((set) => ({
  movies: [],
  moviesIsLoading: false,
  fetchSearchMovies: async (
    query: string,
    signal: AbortSignal,
    page: number
  ) => {
    set({ moviesIsLoading: true });
    const data = await fetchSearchMovie(query, "movie", signal, page);
    set({ movies: data, moviesIsLoading: false });
  },
}));
