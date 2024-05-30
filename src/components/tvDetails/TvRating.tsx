import STAR from "../../assets/svg/STAR.svg";
import { Tv } from "../../models/Tv";

type TvRatingProps = {
    tv: Tv
}

function TvRating({tv}: TvRatingProps) {
  return (
    <div className="flex gap-1 items-center justify-center">
      <img src={STAR} alt="vote" className="w-10 h-10" />
      <span className="text-3xl text-gray-500 font-semibold">
        {tv.vote_average.toString().length > 4
          ? tv.vote_average.toString().slice(0, -2)
          : tv.vote_average.toString().slice(0, -1)}
      </span>
    </div>
  );
}

export default TvRating;
