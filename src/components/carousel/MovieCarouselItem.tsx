import { Link } from "react-router-dom";
import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";

type MovieCarouselItemProps = {
  movie: Movie;
};

function MovieCarouselItem({ movie }: MovieCarouselItemProps) {
  return (
    <Link to={'movie-details/'} state={movie}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-60 h-full">
        <img
          src={ImageUrl + movie.poster_path}
          alt="movie poster"
          className="w-60 h-80 rounded-lg"
        />
        <div className="text-lg text-gray-600 font-semibold">{movie.title}</div>
      </div>
    </Link>
  );
}

export default MovieCarouselItem;
