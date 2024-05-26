import { Genre } from "../../models/Genre";
import { Tv } from "../../models/Tv";
import { ImageUrl } from "../../requestConfig";
import MovieTitle from "../movieDetails/MovieTitle";

import STAR from "../../assets/svg/STAR.svg";


type TvDetailsContentProps = {
  tv: Tv;
  genres: Genre[];
};

function TvDetailsContent({ tv, genres }: TvDetailsContentProps) {
  return (
    <div className="flex flex-col p-1 gap-8 mb-48">
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
      <div className="flex gap-1 items-center justify-center">
        <img src={STAR} alt="vote" className="w-10 h-10" />
        <span className="text-3xl text-gray-500 font-semibold">
          {tv.vote_average.toString().length > 4
            ? tv.vote_average.toString().slice(0, -2)
            : tv.vote_average.toString().slice(0, -1)}
        </span>
      </div>
    </div>
  );
}

export default TvDetailsContent;
