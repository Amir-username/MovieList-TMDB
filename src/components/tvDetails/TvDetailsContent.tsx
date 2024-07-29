import { useEffect, useState } from "react";
import { Genre } from "../../models/Genre";
import { Image } from "../../models/Image";
import { Tv } from "../../models/Tv";
import { BaseURL, ImageUrl, options } from "../../requestConfig";
import TvInfo from "./TvInfo";
import axios from "axios";
import ImageCarousel from "../carousel/ImageCarousel";
import MovieRating from "../movieDetails/MovieRating";
import ImageLoading from "../loading/ImageLoading";
import AddToList from "../movieDetails/AddToList";

type TvDetailsContentProps = {
  tv: Tv;
  genres: Genre[];
};

function TvDetailsContent({ tv, genres }: TvDetailsContentProps) {
  const [images, setImages] = useState<Image[]>([]);
  const [snackbar, setSnackbar] = useState<boolean>(false);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await axios.get(BaseURL + `/tv/${tv.id}/images`, options);
      const data = await res.data;
      setImages(data.backdrops.slice(0, 10));
    };

    fetchCast();
  }, []);

  return (
    <div className="flex flex-col p-1 gap-8 mb-48 md:px-64">
      <div className="flex gap-2 justify-between">
        <TvInfo genres={genres} tv={tv} />
        {tv.poster_path ? (
          <img
            src={ImageUrl + tv.poster_path}
            alt="movie poster"
            className="w-36 h-52 ring-1 ring-gray-100 rounded-sm"
          />
        ) : (
          <ImageLoading type="tv" />
        )}
      </div>
      <div className="p-2 text-xl text-gray-800 dark:text-gray-400 font-main-font">
        {tv.overview}
      </div>
      <MovieRating movie={tv} />
      <AddToList movie={tv} setSnackbar={setSnackbar} localKey="watchlistTv" />
      {images && <ImageCarousel images={images} />}

      {snackbar && (
        <div className="flex bottom-64 left-24 sticky items-center justify-center duration-1000 ">
          <div className="font-main-font bg-primary-light dark:bg-primary-dark w-fit p-4 rounded-full text-white text-xl opacity-95">
            {tv.name} has been added to your watchlist
          </div>
        </div>
      )}
    </div>
  );
}

export default TvDetailsContent;
