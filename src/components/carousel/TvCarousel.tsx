import { Link } from "react-router-dom";
import { Tv } from "../../models/Tv";
import TvCarouselItem from "./TvCarouselItem";

type TvCarouselProps = {
  series: Tv[];
};

function TvCarousel({ series }: TvCarouselProps) {
  return (
    <div className="flex flex-col mt-8 gap-8">
      <div className="flex items-center justify-center ">
        <Link to={"series/"} state={series}>
          <span className="text-2xl font-semibold text-gray-400">series</span>
        </Link>
      </div>
      <div
        id="no-scrollbar"
        className="flex overflow-scroll gap-2 md:gap-8 md:flex-wrap md:justify-center"
      >
        {series.map((tv) => {
          return <TvCarouselItem tv={tv} key={tv.id} />;
        })}
      </div>
    </div>
  );
}

export default TvCarousel;
