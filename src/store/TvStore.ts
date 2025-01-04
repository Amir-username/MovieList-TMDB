
import { create } from "zustand";
import { Tv } from "../models/Tv";
import { fetchMovies } from "../api/fetchMovies";

type TvState = {
  tv: Tv[];
  tvIsLoading: boolean;
  tvIsError: boolean;
  fetchTv: (url: string) => Promise<void>;
};

export const useTvStore = create<TvState>((set) => ({
  tv: [],
  tvIsLoading: false,
  tvIsError: false,
  fetchTv: async (url: string) => {
    set({ tvIsLoading: true });
    try {
      const data = await fetchMovies(url);
      const TvList: Tv[] = [];
      data?.map((data: any, i: number) => {
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
          data.genres
        );
        TvList[i] = tvModel;
      });

      set({ tv: TvList, tvIsLoading: false });
    } catch (error) {
      set({ tvIsError: true, tvIsLoading: false });
    }
  },
}));
