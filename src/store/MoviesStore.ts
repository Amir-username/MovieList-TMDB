import { create } from "zustand";
import { Movie } from "../models/Movie";
import { fetchMovies } from "../api/fetchMovies";

type MoviesState = {
  movies: Movie[];
  moviesIsLoading: boolean;
  moviesIsError: boolean;
  fetchMovies: (url: string) => Promise<void>;
};

export const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],
  moviesIsLoading: false,
  moviesIsError: false,
  fetchMovies: async (url: string) => {
    set({ moviesIsLoading: true });
    try {
      const data = await fetchMovies(url);
      set({ movies: data, moviesIsLoading: false });
    } catch (error) {
      set({ moviesIsError: true, moviesIsLoading: false });
    }
  },
}));
