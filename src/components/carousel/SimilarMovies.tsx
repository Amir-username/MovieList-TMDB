import { Movie } from "../../models/Movie";
import SimilarMoviesItem from "./SimilarMoviesItem";

type SimilarMoviesProps = {
  movies: Movie[];
  setCurrentMovie: React.Dispatch<React.SetStateAction<Movie>>;
  setScrollToTop: React.Dispatch<React.SetStateAction<boolean>>;
};

function SimilarMovies({
  movies,
  setCurrentMovie,
  setScrollToTop,
}: SimilarMoviesProps) {
  return (
    <div className="flex flex-col gap-8 p-3">
      <div className="text-3xl text-gray-600 dark:text-gray-400 font-title-font">
        Recommendations
      </div>
      <div
        id="no-scrollbar"
        className="flex md:flex-wrap overflow-scroll md:gap-8 gap-2"
      >
        {movies.map((movie) => {
          return (
            <SimilarMoviesItem
              movie={movie}
              key={movie.id}
              setCurrentMovie={setCurrentMovie}
              setScrollToTop={setScrollToTop}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SimilarMovies;
