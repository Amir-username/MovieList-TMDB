import { Link } from "react-router-dom";
import { Cast } from "../../models/Cast";
import { ImageUrl } from "../../requestConfig";
import ImageLoading from "../loading/ImageLoading";

type CastCarouselItemProps = {
  castItem: Cast;
};

function CastCarouselItem({ castItem }: CastCarouselItemProps) {
  return (
    <Link to={"../credit-details"} state={castItem}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-36 h-full">
        {castItem.profile_path ? (
          <img
            src={ImageUrl + castItem.profile_path}
            alt="movie poster"
            className="w-36 h-52 rounded-lg"
          />
        ) : (
          <ImageLoading type="person"/>
        )}
        <div className="text-md text-gray-600 dark:text-gray-400 font-main-font">
          {castItem.name}
        </div>
        <div className="text-base text-gray-400 dark:text-gray-300 font-main-font">
          {castItem.character}
        </div>
      </div>
    </Link>
  );
}

export default CastCarouselItem;
