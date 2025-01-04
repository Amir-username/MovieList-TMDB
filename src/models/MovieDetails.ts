import { Genre } from "./Genre";
import { Movie } from "./Movie";

export class MovieDetails extends Movie {
    public genres: Genre[] = [];
}