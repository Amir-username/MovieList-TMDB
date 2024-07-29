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
import SimilarMovies from "../carousel/SimilarMovies";
import MovieBackDrop from "./MovieBackDrop";
import AddToList from "./AddToList";
import ImageLoading from "../loading/ImageLoading";
import AddRating from "./AddRating";
import RatingModal from "../modal/RatingModal";
import { MovieRate } from "../../models/MovieRate";
import YourRate from "./MyRate";

type MovieDetailsContentProps = {
  movie: Movie;
  genres: Genre[];
};

function MovieDetailsContent({ movie, genres }: MovieDetailsContentProps) {
  const [currMovie, setCurrMovie] = useState<Movie>(movie);

  const [cast, setCast] = useState<Cast[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [scrollToTop, setScrollToTop] = useState<boolean>(false);

  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [ratingModal, setRatingModal] = useState<boolean>(false);

  const [yourRate, setYourRate] = useState<MovieRate>();

  useEffect(() => {
    const fetchCast = async () => {
      const res = await axios.get(
        BaseURL + `/movie/${currMovie.id}/credits`,
        options
      );
      const data = await res.data;
      setCast(data.cast);
    };

    fetchCast();
  }, [currMovie]);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await axios.get(
        BaseURL + `/movie/${currMovie.id}/images`,
        options
      );
      const data = await res.data;
      setImages(data.backdrops.slice(0, 10));
    };

    fetchCast();
  }, [currMovie]);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await axios.get(
        BaseURL + `/movie/${currMovie.id}/recommendations?page=1`,
        options
      );
      const data = await res.data;
      setSimilarMovies(data.results);
    };

    fetchCast();
  }, [currMovie]);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setScrollToTop(false);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("myRate");
    if (data) {
      const allRates: MovieRate[] = JSON.parse(data);
      allRates.map((rate) => {
        if (rate.movieId === currMovie.id) {
          setYourRate(rate);
        }
      });
    }
  }, []);

  return (
    <>
      <RatingModal
        isOpen={ratingModal}
        setIsOpen={setRatingModal}
        movieId={currMovie.id}
        setYourRate={setYourRate}
      />
      <div className="">
        <MovieBackDrop image={ImageUrl + currMovie.backdrop_path} />
        <div className="flex flex-col p-1 gap-8 mb-32 md:px-64">
          <div className="flex gap-2 justify-between">
            <MovieInfo genres={genres} movie={currMovie} />
            {movie.poster_path ? (
              <img
                src={ImageUrl + currMovie.poster_path}
                alt="movie poster"
                className="w-36 h-52 ring-1 ring-gray-100 rounded-sm"
              />
            ) : (
              <ImageLoading type="movie" />
            )}
          </div>
          {yourRate && <YourRate rate={yourRate} />}
          <div className="p-2 text-xl text-gray-800 dark:text-gray-400 font-main-font">
            {currMovie.overview}
          </div>
          <div className="flex gap-1 items-center justify-center">
            <AddRating setOpen={setRatingModal} />
            <MovieRating movie={currMovie} />
          </div>
          <AddToList movie={currMovie} setSnackbar={setSnackbar} localKey="watchlist"/>
          <CastCarousel cast={cast} />
          <ImageCarousel images={images} />
          <SimilarMovies
            movies={similarMovies}
            setCurrentMovie={setCurrMovie}
            setScrollToTop={setScrollToTop}
          />
        </div>
        {snackbar && (
          <div className="flex bottom-64 left-24 sticky items-center justify-center duration-1000 ">
            <div className="font-main-font bg-primary-light dark:bg-primary-dark w-fit p-4 rounded-full text-white text-xl opacity-95">
              {movie.title} has been added to your watchlist
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieDetailsContent;
