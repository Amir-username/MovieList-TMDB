import { create } from "zustand";
import { Genre } from "../models/Genre";
import { fetchGenres } from "../api/fetchGenres";

type GenreStoreState = {
  genres: Genre[];
  genresIsLoading: boolean;
  genresIsError: boolean;
  fetchGenres: (type: "movie" | "tv") => Promise<void>;
};

export const useGenreStore = create<GenreStoreState>((set) => ({
  genres: [],
  fetchGenres: async (type: "movie" | "tv") => {
    set({ genresIsLoading: true });
    try {
      const data = await fetchGenres(type);

      set({ genres: data, genresIsLoading: false });
    } catch (error) {
      set({ genresIsError: true, genresIsLoading: false });
    }
  },
  genresIsLoading: false,
  genresIsError: false,
}));
