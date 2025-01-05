import { Link } from "react-router-dom";
import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";
import ImageLoading from "../loading/ImageLoading";

type AllMovieItemProps = {
  movie: Movie;
};

function AllMovieItem({ movie }: AllMovieItemProps) {
  return (
    <Link to={"../movie-details"} state={movie}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-28 md:w-40 h-full">
        {movie.poster_path ? (
          <img
            src={ImageUrl + movie.poster_path}
            alt="movie poster"
            className="rounded-lg"
          />
        ) : (
          <ImageLoading type="movie"/>
        )}
        <div className="text-sm text-gray-600 font-main-font dark:text-gray-400">
          {movie.title}
        </div>
      </div>
    </Link>
  );
}

export default AllMovieItem;
