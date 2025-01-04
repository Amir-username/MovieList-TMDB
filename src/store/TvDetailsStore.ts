
import { create } from "zustand";
import { Tv } from "../models/Tv";
import { fetchMovieDetails } from "../api/fetchMovieDetails";

type TvDetailsState = {
  tv: Tv | null;
  tvIsLoading: boolean;
  tvIsError: boolean;
  fetchTvDetails: (id: number) => Promise<void>;
};

export const useTvDetailsStore = create<TvDetailsState>((set) => ({
  tv: null,
  tvIsLoading: false,
  tvIsError: false,
  fetchTvDetails: async (id: number) => {
    set({ tvIsLoading: true });
    try {
      const data = await fetchMovieDetails(`tv/${id}`);
      const tvModel: Tv = new Tv(
        data.id,
        data.name,
        data.genre_ids,
        data.poster_path,
        data.created_by,
        data.overview,
        data.first_air_date,
        data.original_language,
        data.vote_average,
        data.backdrop_path,
        data.genres,
        data.release_date
      );
      set({ tv: tvModel, tvIsLoading: false });
    } catch (error) {
      set({ tvIsError: true, tvIsLoading: false });
    }
  },
}));
