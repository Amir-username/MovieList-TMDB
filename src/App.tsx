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

function App() {
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      setMovieGenres(res.data.genres);
    });
  }, []);
  return (
    <>
      <div>
        <MovieGenreContext.Provider value={movieGenres}>
          <Routes>
            <Route path="/">
              <Route path="explore/" element={<Explore />} />
              <Route index element={<MovieHome />} />
              <Route index path="/movies" element={<AllMovies />} />
              <Route path="movie-details" element={<MovieDetails />} />
              <Route path="/series" element={<AllSeries />} />
              <Route path="watchlist/" element={<WatchList />} />
              <Route path="*" />
            </Route>
          </Routes>
          <BottomNavigation />
        </MovieGenreContext.Provider>
      </div>
    </>
  );
}

export default App;
