import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";

type MovieCarouselItemProps = {
  movie: Movie;
};

function MovieCarouselItem({ movie }: MovieCarouselItemProps) {
  return (
    <img
      src={ImageUrl + movie.poster_path}
      alt="movie poster"
      className="w-36 h-48 rounded-lg"
    />
  );
}

export default MovieCarouselItem;
