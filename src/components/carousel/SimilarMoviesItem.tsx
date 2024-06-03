import { ImageUrl } from "../../requestConfig";
import { Movie } from "../../models/Movie";

type SimilarMoviesItemProps = {
  movie: Movie;
  setCurrentMovie: React.Dispatch<React.SetStateAction<Movie>>;
  setScrollToTop: React.Dispatch<React.SetStateAction<boolean>>;
};

function SimilarMoviesItem({
  movie,
  setCurrentMovie,
  setScrollToTop,
}: SimilarMoviesItemProps) {
  const changeMovie = () => {
    setCurrentMovie(movie);
    setScrollToTop(true);
  };

  return (
    <div
      onClick={changeMovie}
      className="flex flex-col flex-shrink-0 gap-2 items-center w-36 h-full"
    >
      <img
        src={ImageUrl + movie.poster_path}
        alt="movie poster"
        className="w-36 h-52 rounded-lg"
      />
      <div className="text-base text-gray-600 font-semibold">{movie.title}</div>
    </div>
  );
}

export default SimilarMoviesItem;