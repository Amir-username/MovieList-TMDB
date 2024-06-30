import { Genre } from "../../models/Genre";
import { Tv } from "../../models/Tv";
import MovieTitle from "../movieDetails/MovieTitle";

type TvInfoProps = {
  tv: Tv;
  genres: Genre[];
};

function TvInfo({ tv, genres }: TvInfoProps) {
  return (
    <div className="flex flex-col p-2 gap-4">
      <MovieTitle title={tv.name} />
      <div className="flex gap-2 items-center">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          calendar_today
        </span>
        <div className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          {tv.first_air_date}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          theater_comedy
        </span>
        <div className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          {genres.map((genre) => {
            return <span key={genre.id}>{genre.name} </span>;
          })}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          language
        </span>
        <div className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          {tv.original_language.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default TvInfo;
