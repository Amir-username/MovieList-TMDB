import { useEffect, useState } from "react";
import { Genre } from "../../models/Genre";
import { Movie } from "../../models/Movie";
import { BaseURL, ImageUrl, options } from "../../requestConfig";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import axios from "axios";
import { Cast } from "../../models/Cast";
import CastCarousel from "../carousel/CastCarousel";
import ImageCarousel from "../carousel/ImageCarousel";
import { Image } from "../../models/Image";

type MovieDetailsContentProps = {
  movie: Movie;
  genres: Genre[];
};

function MovieDetailsContent({ movie, genres }: MovieDetailsContentProps) {
  const [cast, setCast] = useState<Cast[]>([]);
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await axios.get(
        BaseURL + `/movie/${movie.id}/credits`,
        options
      );
      const data = await res.data;

      setCast(data.cast);
    };

    fetchCast();
  }, []);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await axios.get(
        BaseURL + `/movie/${movie.id}/images`,
        options
      );
      const data = await res.data;
      setImages(data.backdrops.slice(0, 10));
    };

    fetchCast();
  }, []);

  return (
    <div className="flex flex-col p-1 gap-8 mb-32">
      <div className="flex gap-2 justify-between">
        <MovieInfo genres={genres} movie={movie} />
        <img
          src={ImageUrl + movie.poster_path}
          alt="movie poster"
          className="w-36 h-52 ring-1 ring-gray-100 rounded-sm"
        />
      </div>
      <div className="p-2 text-lg text-gray-800">{movie.overview}</div>
      <MovieRating movie={movie} />
      <CastCarousel cast={cast} />
      <ImageCarousel images={images} />
    </div>
  );
}

export default MovieDetailsContent;

// #F19E39
