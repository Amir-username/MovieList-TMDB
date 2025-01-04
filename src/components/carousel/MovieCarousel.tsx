import { Link } from "react-router-dom";
import { Movie } from "../../models/Movie";
import MovieCarouselItem from "./MovieCarouselItem";
import { Tv } from "../../models/Tv";

type MovieCarouselProps = {
  title: string;
  movies: Movie[] | Tv[];
};

function MovieCarousel({ title, movies }: MovieCarouselProps) {
  return (
    <div className="flex flex-col mt-8 gap-8 md:gap-5 md:justify-center">
      <div className="flex justify-center items-center ">
        <Link to={"movies"}>
          <span className="md:text-4xl text-3xl text-primary-light dark:text-primary-dark font-title-font">
            {title}
          </span>
        </Link>
      </div>
      <div
        id="no-scrollbar"
        className="flex overflow-scroll gap-2 md:flex-wrap md:gap-8 md:justify-start md:w-full md:pl-20"
      >
        {movies.map((movie) => {
          return <MovieCarouselItem movie={movie} key={movie.id} />;
        })}
        <div className="hidden lg:flex items-center">
          <div className="py-1 px-2 rounded-full ring-4 ring-primary-light dark:ring-primary-dark">
            <span className="material-symbols-outlined  text-primary-light dark:text-primary-dark text-3xl cursor-pointer">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCarousel;
