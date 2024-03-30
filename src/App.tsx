import { Route, Routes } from "react-router-dom";
import MovieHome from "./components/moviePage/MovieHome";
import TvHome from "./components/tvPage/TvHome";
import WatchList from "./components/watchList/WatchList";
import Explore from "./components/explore/Explore";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/">
            <Route path="explore/" element={<Explore />} />
            <Route index element={<MovieHome />} />
            <Route path="tv/" element={<TvHome />} />
            <Route path="watchlist/" element={<WatchList />} />
            <Route path="*" />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
