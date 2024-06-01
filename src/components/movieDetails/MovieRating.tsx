import STAR from "../../assets/svg/STAR.svg";
import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";


type MovieRatingProsp = {
    movie:Movie | Tv
}

function MovieRating({movie}: MovieRatingProsp) {
  return (
    <div className="flex gap-1 items-center justify-center">
      <img src={STAR} alt="vote" className="w-10 h-10" />
      <span className="text-3xl text-gray-500 font-semibold">
        {movie.vote_average.toString().length > 3
          ? movie.vote_average.toString().slice(0, 3)
          : movie.vote_average}
      </span>
    </div>
  );
}

export default MovieRating;
