import { Link } from "react-router-dom";
import { Tv } from "../../models/Tv";
import { ImageUrl } from "../../requestConfig";
import ImageLoading from "../loading/ImageLoading";

type TvCarouselItemProps = {
  tv: Tv;
};

function TvCarouselItem({ tv }: TvCarouselItemProps) {
  return (
    <Link to={"tv-details"} state={tv}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-36 h-full">
        {tv.poster_path ? (
          <img
            src={ImageUrl + tv.poster_path}
            alt="movie poster"
            className="w-36 h-52 rounded-lg"
          />
        ) : (
          <ImageLoading type="tv" />
        )}
        <div className="text-base text-gray-600 dark:text-gray-400 font-main-font">
          {tv.name}
        </div>
      </div>
    </Link>
  );
}

export default TvCarouselItem;
