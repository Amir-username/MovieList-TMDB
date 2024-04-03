import { Link } from "react-router-dom";
import { Tv } from "../../models/Tv";
import TvCarouselItem from "./TvCarouselItem";

type TvCarouselProps = {
  series: Tv[];
};

function TvCarousel({ series }: TvCarouselProps) {
  return (
    <div className="flex flex-col mt-8 gap-8">
      <Link to={"series/"} state={series}>
        <div className="text-center text-2xl font-semibold text-gray-400">
          series
        </div>
      </Link>
      <div id="no-scrollbar" className="flex overflow-scroll gap-2">
        {series.map((tv) => {
          return <TvCarouselItem tv={tv} key={tv.id} />;
        })}
      </div>
    </div>
  );
}

export default TvCarousel;
