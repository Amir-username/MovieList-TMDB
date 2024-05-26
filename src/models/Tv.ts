
export class Tv {
  id: number;
  name: string;
  genre_ids: number[];
  poster_path: string;
  created_by: string;
  overview: string;
  first_air_date: string;
  original_language: string;
  vote_average: number

  constructor(
    id: number,
    name: string,
    genre_ids: number[],
    poster_path: string,
    created_by: string,
    overview: string,
    first_air_date: string,
    original_language: string,
    vote_average: number
  ) {
    this.id = id;
    this.name = name;
    this.genre_ids = genre_ids;
    this.poster_path = poster_path;
    this.created_by = created_by;
    this.overview = overview;
    this.first_air_date = first_air_date;
    this.original_language = original_language,
    this.vote_average = vote_average
  }
}
