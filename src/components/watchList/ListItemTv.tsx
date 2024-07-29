import { useState } from "react";
import { Tv } from "../../models/Tv";
import { ImageUrl } from "../../requestConfig";
import ImageLoading from "../loading/ImageLoading";
import STAR from "../../assets/svg/STAR.svg";

type ListItemTvProps = {
  tv: Tv;
  setWatchList: React.Dispatch<React.SetStateAction<Tv[]>>;
};

function ListItemTv({ tv, setWatchList }: ListItemTvProps) {
  const [watched, setWatched] = useState<boolean>(false);

  const onWatched = () => {
    setWatched((watched) => !watched);
  };

  const onRemove = () => {
    const currList = localStorage.getItem("watchlistTv");

    if (currList) {
      const newList: Tv[] = JSON.parse(currList);
      localStorage.setItem(
        "watchlistTv",
        JSON.stringify(newList.filter((tvItem) => tvItem.id != tv.id))
      );
    }
    setWatchList((watchlist) => {
      return watchlist.filter((tvItem) => tvItem.id != tv.id);
    });
  };

  return (
    <div
      className="flex p-3 rounded-2xl w-full ring-1 ring-gray-200 dark:ring-gray-700
       shadow-sm shadow-gray-500 dark:shadow-primary-dark justify-between md:justify-between md:w-96 md:gap-5"
    >
      <div className="flex gap-5">
        {tv.poster_path ? (
          <img
            src={ImageUrl + tv.poster_path}
            alt="poster"
            className="w-14 h-20 rounded-md"
          />
        ) : (
          <ImageLoading type="movie" />
        )}
        <div className="flex flex-col gap-4">
          <span className="text-xl font-title-font text-gray-600 dark:text-gray-400">
            {tv.name}
          </span>
          <div className="flex gap-1">
            <img src={STAR} alt="vote" className="w-5 h-5" />
            <span className="text-sm text-gray-500 dark:text-gray-400 font-bold font-main-font">
              {tv.vote_average.toString().length > 3
                ? tv.vote_average.toString().slice(0, 3)
                : tv.vote_average}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end p-3 gap-3">
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
          className="material-symbols-outlined text-2xl text-gray-400 cursor-pointer"
        >
          remove
        </span>
      </div>
    </div>
  );
}

export default ListItemTv;
