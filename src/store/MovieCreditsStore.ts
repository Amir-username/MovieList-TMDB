
import { create } from "zustand";
import { Cast } from "../models/Cast";
import { fetchCredits } from "../api/fetchCredits";

type MovieCreditsState = {
  cast: Cast[];
  castIsLoading: boolean;
  castIsError: boolean;
  fetchCast: (id: number, type: "movie" | "tv") => void;
};

export const useMovieCreditsStore = create<MovieCreditsState>((set) => ({
  cast: [],
  fetchCast: async (id: number, type: "movie" | "tv") => {
    set({ castIsLoading: true });
    try {
      const data = await fetchCredits(id, type);
      set({ cast: data, castIsLoading: false });
    } catch (error) {
      set({ castIsError: true, castIsLoading: false });
    }
  },
  castIsLoading: false,
  castIsError: false,
}));
