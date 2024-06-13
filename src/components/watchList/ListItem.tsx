import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";
import STAR from "../../assets/svg/STAR.svg";
import { useState } from "react";

type ListItemProps = {
  movie: Movie;
  setWatchList: React.Dispatch<React.SetStateAction<Movie[]>>;
};

function ListItem({ movie, setWatchList }: ListItemProps) {
  const [watched, setWatched] = useState<boolean>(false);

  const onWatched = () => {
    setWatched((watched) => !watched);
  };

  const onRemove = () => {
    const currList = localStorage.getItem("watchlist");

    if (currList) {
      const newList: Movie[] = JSON.parse(currList);
      localStorage.setItem(
        "watchlist",
        JSON.stringify(newList.filter((movieItem) => movieItem.id != movie.id))
      );
    }
    setWatchList((watchlist) => {
      return watchlist.filter((movieItem) => movieItem.id != movie.id);
    });

  };

  return (
    <div className="flex p-3 rounded-2xl w-full ring-1 ring-gray-100 shadow-sm justify-between">
      <div className="flex gap-5">
        <img
          src={ImageUrl + movie.poster_path}
          alt="poster"
          className="w-14 h-20 rounded-md"
        />
        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold text-gray-600">
            {movie.title}
          </span>
          <div className="flex gap-1">
            <img src={STAR} alt="vote" className="w-5 h-5" />
            <span className="text-sm text-gray-500 font-bold">
              {movie.vote_average.toString().length > 3
                ? movie.vote_average.toString().slice(0, 3)
                : movie.vote_average}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end p-3 gap-3">
        <span
          onClick={onWatched}
          className={`material-symbols-outlined text-2xl ${
            watched ? "text-emerald-500" : "text-gray-400"
          }`}
        >
          {watched ? "check_circle" : "visibility"}
        </span>
        <span
          onClick={onRemove}
          className="material-symbols-outlined text-2xl text-gray-400"
        >
          remove
        </span>
      </div>
    </div>
  );
}

export default ListItem;
