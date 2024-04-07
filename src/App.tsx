import { Route, Routes } from "react-router-dom";
import MovieHome from "./components/moviePage/MovieHome";
import WatchList from "./components/watchList/WatchList";
import Explore from "./components/explore/Explore";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import AllMovies from "./components/moviePage/AllMovies";
import AllSeries from "./components/moviePage/AllSeries";
import MovieDetails from "./components/movieDetails/MovieDetails";

function App() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default App;
