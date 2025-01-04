
import { create } from "zustand";
import { Tv } from "../models/Tv";
import { fetchSearchMovie } from "../api/fetchSearchMovie";

type SearchTvState = {
  tv: Tv[];
  tvIsLoading: boolean;
  fetchSearchTv: (
    query: string,
    signal: AbortSignal,
    page: number
  ) => Promise<void>;
};

export const useSearchTvStore = create<SearchTvState>((set) => ({
  tv: [],
  tvIsLoading: false,
  fetchSearchTv: async (query: string, signal: AbortSignal, page: number) => {
    set({ tvIsLoading: true });
    const TvList: Tv[] = [];
    const data = await fetchSearchMovie(query, "tv", signal, page);
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
  },
}));
