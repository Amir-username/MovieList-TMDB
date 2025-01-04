import { create } from "zustand";

type MoviePageState = {
  pageNumber: number;
  setPageNumber: (newNumber: number) => void;
  increasePageNumber: () => void;
  decreasePageNumber: () => void;
};

export const useMoviePageStore = create<MoviePageState>((set) => ({
  pageNumber: 1,
  setPageNumber: (newPageNumber: number) => {
    set({ pageNumber: newPageNumber });
  },
  increasePageNumber: () =>
    set((state) => {
      return { pageNumber: state.pageNumber + 1 };
    }),
  decreasePageNumber: () =>
    set((state) => {
      return { pageNumber: state.pageNumber - 1 };
    }),
}));
