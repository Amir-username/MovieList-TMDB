import { Tv } from "../../models/Tv";
import { ImageUrl } from "../../requestConfig";

type TvCarouselItemProps = {
  tv: Tv;
};

function TvCarouselItem({ tv }: TvCarouselItemProps) {
  return (
    <div className="flex flex-col flex-shrink-0 gap-2 items-center w-60 h-full">
      <img
        src={ImageUrl + tv.poster_path}
        alt="movie poster"
        className="w-60 h-80 rounded-lg"
      />
      <div className="text-lg text-gray-600 font-semibold">{tv.name}</div>
    </div>
  );
}

export default TvCarouselItem;
