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

type TvDetailsContentProps = {
  tv: Tv;
  genres: Genre[];
};

function TvDetailsContent({ tv, genres }: TvDetailsContentProps) {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await axios.get(BaseURL + `/tv/${tv.id}/images`, options);
      const data = await res.data;
      setImages(data.backdrops.slice(0, 10));
    };

    fetchCast();
  }, []);

  return (
    <div className="flex flex-col p-1 gap-8 mb-48 md:px-32">
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
      {images && <ImageCarousel images={images} />}
    </div>
  );
}

export default TvDetailsContent;
