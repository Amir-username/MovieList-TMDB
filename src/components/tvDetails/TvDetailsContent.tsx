import { Genre } from "../../models/Genre";
import { Tv } from "../../models/Tv";
import { ImageUrl } from "../../requestConfig";
import MovieTitle from "../movieDetails/MovieTitle";

type TvDetailsContentProps = {
  tv: Tv;
  genres: Genre[];
};

function TvDetailsContent({ tv, genres }: TvDetailsContentProps) {
  return (
    <div className="flex flex-col p-1 gap-8">
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col p-2 gap-4">
          <MovieTitle title={tv.name} />
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-emerald-700 text-xl">
              calendar_today
            </span>
            <div className="font-semibold text-gray-600 text-lg">
              {tv.first_air_date}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-emerald-700 text-xl">
              theater_comedy
            </span>
            <div className="font-semibold text-gray-600 text-lg">
              {genres.map((genre) => {
                return <span key={genre.id}>{genre.name} </span>;
              })}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-emerald-700 text-xl">
              theater_comedy
            </span>
            <div className="font-semibold text-gray-600 text-lg"></div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined text-emerald-700 text-xl">
              language
            </span>
            <div className="font-semibold text-gray-600 text-lg">
              {tv.original_language.toUpperCase()}
            </div>
          </div>
        </div>
        <img
          src={ImageUrl + tv.poster_path}
          alt="movie poster"
          className="w-36 h-52 ring-1 ring-gray-100 rounded-sm"
        />
      </div>
      <div className="p-2 text-lg text-gray-800">{tv.overview}</div>
    </div>
  );
}

export default TvDetailsContent;
