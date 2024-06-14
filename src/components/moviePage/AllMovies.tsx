import MoviesBrand from "../brand/MoviesBrand";
import AllMoviesContent from "./AllMoviesContent";
import { useLocation } from "react-router-dom";

function AllMovies() {
  const location = useLocation();

  return (
    <div className="flex flex-col m-5 gap-10 mb-28 md:px-20">
      <MoviesBrand name="movies" />
      <AllMoviesContent movies={location.state} />
    </div>
  );
}

export default AllMovies;
