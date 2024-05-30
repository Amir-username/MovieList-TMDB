import { Genre } from "../../models/Genre";
import { Tv } from "../../models/Tv";
import { ImageUrl } from "../../requestConfig";
import TvInfo from "./TvInfo";
import TvRating from "./TvRating";

type TvDetailsContentProps = {
  tv: Tv;
  genres: Genre[];
};

function TvDetailsContent({ tv, genres }: TvDetailsContentProps) {

  return (
    <div className="flex flex-col p-1 gap-8 mb-48">
      <div className="flex gap-2 justify-between">
        <TvInfo genres={genres} tv={tv} />
        <img
          src={ImageUrl + tv.poster_path}
          alt="movie poster"
          className="w-36 h-52 ring-1 ring-gray-100 rounded-sm"
        />
      </div>
      <div className="p-2 text-lg text-gray-800">{tv.overview}</div>
      <TvRating tv={tv} />
    </div>
  );
}

export default TvDetailsContent;
