import { Genre } from "./Genre";

export class Tv {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  created_by: string;
  overview: string;
  release_date: string;
  original_language: string;
  vote_average: number;
  backdrop_path: string;
  genres: Genre[];

  constructor(
    id: number,
    title: string,
    genre_ids: number[],
    poster_path: string,
    created_by: string,
    overview: string,
    release_date: string,
    original_language: string,
    vote_average: number,
    backdrop_path: string,
    genres: Genre[],
  ) {
    this.id = id;
    this.title = title;
    this.genre_ids = genre_ids;
    this.poster_path = poster_path;
    this.created_by = created_by;
    this.overview = overview;
    this.release_date = release_date;
    (this.original_language = original_language),
      (this.vote_average = vote_average);
    this.backdrop_path = backdrop_path;
    this.genres = genres;
  }
}
