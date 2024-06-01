import { Link } from "react-router-dom";
import { Cast } from "../../models/Cast";
import { ImageUrl } from "../../requestConfig";

type CastCarouselItemProps = {
  castItem: Cast;
};

function CastCarouselItem({ castItem }: CastCarouselItemProps) {
  return (
    <Link to={"../credit-details"} state={castItem}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-36 h-full">
        <img
          src={ImageUrl + castItem.profile_path}
          alt="movie poster"
          className="w-36 h-52 rounded-lg"
        />
        <div className="text-base text-gray-600 font-semibold">
          {castItem.name}
        </div>
        <div className="text-base text-gray-400">{castItem.character}</div>
      </div>
    </Link>
  );
}

export default CastCarouselItem;
