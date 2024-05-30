import STAR from "../../assets/svg/STAR.svg";
import { Movie } from "../../models/Movie";


type MovieRatingProsp = {
    movie:Movie
}

function MovieRating({movie}: MovieRatingProsp) {
  return (
    <div className="flex gap-1 items-center justify-center">
      <img src={STAR} alt="vote" className="w-10 h-10" />
      <span className="text-3xl text-gray-500 font-semibold">
        {movie.vote_average.toString().length > 4
          ? movie.vote_average.toString().slice(0, -2)
          : movie.vote_average.toString().slice(0, -1)}
      </span>
    </div>
  );
}

export default MovieRating;
