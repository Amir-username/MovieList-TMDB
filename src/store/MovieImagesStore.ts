
import { create } from "zustand";
import { Image } from "../models/Image";
import { fetchMovieImages } from "../api/fetchImages";

type MovieImagesState = {
  images: Image[];
  fetchImages: (id: number, type: 'movie' | 'tv') => void;
  movieImagesIsLoading: boolean;
  movieImagesIsError: boolean;
};

export const useMovieImagesStore = create<MovieImagesState>((set) => ({
  images: [],
  fetchImages: async (id: number, type: 'movie' | 'tv') => {
    set({ movieImagesIsLoading: true });
    try {
      const data = await fetchMovieImages(id, type);
      set({ images: data, movieImagesIsLoading: false });
    } catch (error) {
      set({ movieImagesIsError: true, movieImagesIsLoading: false });
    }
  },
  movieImagesIsLoading: false,
  movieImagesIsError: false,
}));
