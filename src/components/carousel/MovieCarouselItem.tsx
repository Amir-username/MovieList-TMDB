import { Link } from "react-router-dom";
import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";
import ImageLoading from "../loading/ImageLoading";

type MovieCarouselItemProps = {
  movie: Movie;
};

function MovieCarouselItem({ movie }: MovieCarouselItemProps) {
  return (
    <Link to={"../movie-details"} state={movie}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-36 h-full">
        {movie.poster_path ? (
          <img
            src={ImageUrl + movie.poster_path}
            alt="movie poster"
            className="w-36 h-52 rounded-lg"
          />
        ) : (
          <ImageLoading type="movie" />
        )}
        <div className="text-base text-gray-600 dark:text-gray-400 font-main-font">
          {movie.title}
        </div>
      </div>
    </Link>
  );
}

export default MovieCarouselItem;
