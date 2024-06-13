import { Movie } from "./Movie";

export class WatchList {
  id: number;
  name: string;
  movies: Movie[];

  constructor(id: number, name: string, movies: Movie[]) {
    this.id = id;
    this.name = name;
    this.movies = movies;
  }
}
