
import { create } from "zustand";
import { fetchMovieDetails } from "../api/fetchMovieDetails";

type MovieDetailsState = {
  movie: MovieDetailsState | null;
  movieIsLoading: boolean;
  movieIsError: boolean;
  fetchMovieDetails: (id: number) => Promise<void>;
};

export const useMovieDetailsStore = create<MovieDetailsState>((set) => ({
  movie: null,
  movieIsLoading: false,
  movieIsError: false,
  fetchMovieDetails: async (id: number) => {
    set({ movieIsLoading: true });
    try {
      const data = await fetchMovieDetails(`movie/${id}`);
      set({ movie: data, movieIsLoading: false });
    } catch (error) {
      set({ movieIsError: true, movieIsLoading: false });
    }
  },
}));
