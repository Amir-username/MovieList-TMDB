import { Link } from "react-router-dom";
import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";
import ImageLoading from "../loading/ImageLoading";
import { useState } from "react";

type MovieCarouselItemProps = {
  movie: Movie;
};

function MovieCarouselItem({ movie }: MovieCarouselItemProps) {
  const [isOverview, setIsOverview] = useState(false);

  return (
    <Link to={"../movie-details"} state={movie}>
      <div className="flex duration-300 flex-col flex-shrink-0 gap-2 pt-5 items-center w-44 h-full md:hover:scale-110 rounded-lg">
        {movie.poster_path ? (
          <div
            onMouseEnter={() => setIsOverview(true)}
            onMouseLeave={() => setIsOverview(false)}
            className="relative"
          >
            <img
              src={ImageUrl + movie.poster_path}
              alt="movie poster"
              className="w-44 h-72 rounded-lg  hover:brightness-50"
            />
            <p
              className={`${
                !isOverview && "hidden"
              } absolute left-2 top-2 text-sm text-gray-100`}
            >
              {movie.overview.slice(0, 300)}
            </p>
          </div>
        ) : (
          <ImageLoading type="movie" />
        )}
        <div className="text-base text-gray-600 dark:text-gray-400 font-main-font">
          {movie.title}
        </div>
      </div>
    </Link>
  );
}

export default MovieCarouselItem;
