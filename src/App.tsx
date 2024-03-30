import { Route, Routes } from "react-router-dom";
import MovieHome from "./components/moviePage/MovieHome";
import WatchList from "./components/watchList/WatchList";
import Explore from "./components/explore/Explore";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/">
            <Route path="explore/" element={<Explore />} />
            <Route index element={<MovieHome />} />
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
