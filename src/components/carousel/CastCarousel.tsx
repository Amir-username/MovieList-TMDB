import { Cast } from "../../models/Cast";
import CastCarouselItem from "./CastCarouselitem";

type CastCarouselProps = {
  cast: Cast[];
};

function CastCarousel({ cast }: CastCarouselProps) {
  return (
    <div className="flex flex-col mt-8 gap-8 p-2">
      <div className="text-3xl text-gray-600 dark:text-gray-400 font-title-font">
        Cast
      </div>
      <div id="no-scrollbar" className="flex overflow-scroll gap-2">
        {cast.map((castItem) => {
          if (castItem.profile_path) {
            return <CastCarouselItem castItem={castItem} key={castItem.id + Math.random()} />;
          }
        })}
      </div>
    </div>
  );
}

export default CastCarousel;
