import { Link } from "react-router-dom";
import { Tv } from "../../models/Tv";
import { ImageUrl } from "../../requestConfig";

type AllSeriesItemProps = {
  tv: Tv;
};

function AllSeriesItem({ tv }: AllSeriesItemProps) {
  return (
    <Link to={"../tv-details"} state={tv}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-28 h-full">
        <img
          src={ImageUrl + tv.poster_path}
          alt="movie poster"
          className="rounded-lg"
        />
        <div className="text-sm text-gray-600 font-semibold">{tv.name}</div>
      </div>
    </Link>
  );
}

export default AllSeriesItem;
