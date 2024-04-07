import { useLocation } from "react-router-dom";
import MoviesBrand from "../brand/MoviesBrand";
import MovieDetailsContent from "./MovieDetailsContent";

function MovieDetails() {
    const location = useLocation();
    const movie = location.state

    return (
        <div className="flex m-5 flex-col gap-8">
            <MoviesBrand name={movie.title} />
            <MovieDetailsContent movie={movie} />
        </div>
    );
}

export default MovieDetails;