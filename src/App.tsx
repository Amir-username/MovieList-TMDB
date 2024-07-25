import { Route, Routes } from "react-router-dom";
import MovieHome from "./components/moviePage/MovieHome";
import WatchList from "./components/watchList/WatchList";
import Explore from "./components/explore/Explore";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import AllMovies from "./components/moviePage/AllMovies";
import AllSeries from "./components/moviePage/AllSeries";
import MovieDetails from "./components/movieDetails/MovieDetails";
import { useEffect, useState } from "react";
import { Genre } from "./models/Genre";
import axios from "axios";
import { BaseURL, options } from "./requestConfig";
import { MovieGenreContext } from "./contexts/MovieGenreContext";
import { TvGenreContext } from "./contexts/TvGenreContext";
import TvDetails from "./components/tvDetails/TvDetails";
import GenrePage from "./components/genres/GenrePage";
import CreditDetails from "./components/credits/CreditDetails";

function App() {
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [tvGenres, setTvGenres] = useState<Genre[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      setMovieGenres(res.data.genres);
    });
  }, []);

  useEffect(() => {
    axios.get(BaseURL + "/genre/tv/list", options).then((res) => {
      setTvGenres(res.data.genres);
    });
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.className = theme;
    } else {
      document.documentElement.className = "dark";
    }
  }, []);

  return (
    <>
      <MovieGenreContext.Provider value={movieGenres}>
        <TvGenreContext.Provider value={tvGenres}>
          <Routes>
            <Route path="/">
              <Route path="explore/" element={<Explore />} />
              <Route path="genre/" element={<GenrePage />} />
              <Route index element={<MovieHome />} />
              <Route index path="/movies" element={<AllMovies />} />
              <Route path="movie-details" element={<MovieDetails />} />
              <Route path="tv-details" element={<TvDetails />} />
              <Route path="credit-details" element={<CreditDetails />} />
              <Route path="/series" element={<AllSeries />} />
              <Route path="watchlist/" element={<WatchList />} />
              <Route path="*" />
            </Route>
          </Routes>
          <BottomNavigation />
        </TvGenreContext.Provider>
      </MovieGenreContext.Provider>
    </>
  );
}

export default App;
