import { Movie } from "../../models/Movie";
import { ImageUrl } from "../../requestConfig";
import STAR from "../../assets/svg/STAR.svg";
import { useState } from "react";
import ImageLoading from "../loading/ImageLoading";

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
    <div
      className="flex justify-between w-full p-3 shadow-sm rounded-2xl ring-1 ring-gray-200 dark:ring-gray-700 shadow-gray-500 dark:shadow-primary-dark md:justify-between md:w-96 md:gap-5"
    >
      <div className="flex gap-5">
        {movie.poster_path ? (
          <img
            src={ImageUrl + movie.poster_path}
            alt="poster"
            className="h-20 rounded-md w-14"
          />
        ) : (
          <ImageLoading type="movie" />
        )}
        <div className="flex flex-col gap-4">
          <span className="text-xl text-gray-600 font-title-font dark:text-gray-400">
            {movie.title.length > 30
              ? movie.title.slice(0, 30) + "..."
              : movie.title}
          </span>
          <div className="flex gap-1">
            <img src={STAR} alt="vote" className="w-5 h-5" />
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 font-main-font">
              {movie.vote_average.toString().length > 3
                ? movie.vote_average.toString().slice(0, 3)
                : movie.vote_average}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 p-3">
        <span
          onClick={onWatched}
          className={`material-symbols-outlined text-2xl cursor-pointer ${
            watched
              ? "text-primary-light dark:text-primary-dark"
              : "text-gray-400"
          }`}
        >
          {watched ? "check_circle" : "visibility"}
        </span>
        <span
          onClick={onRemove}
          className="text-2xl text-gray-400 cursor-pointer material-symbols-outlined"
        >
          remove
        </span>
      </div>
    </div>
  );
}

export default ListItem;
