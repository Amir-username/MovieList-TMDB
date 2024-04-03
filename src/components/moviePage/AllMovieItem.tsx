import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";

type AllMovieItemProps = {
  movie: Movie;
};

function AllMovieItem({ movie }: AllMovieItemProps) {
  return (
    <div className="flex flex-col flex-shrink-0 gap-2 items-center w-28 h-full">
      <img
        src={ImageUrl + movie.poster_path}
        alt="movie poster"
        className="rounded-lg"
      />
      <div className="text-sm text-gray-600 font-semibold">{movie.title}</div>
    </div>
  );
}

export default AllMovieItem;
