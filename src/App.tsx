// import axios from "axios";

import { Route, Routes } from "react-router-dom";
import MovieHome from "./components/moviePage/MovieHome";
import TvHome from "./components/tvPage/TvHome";
import WatchList from "./components/watchList/WatchList";

// import { useEffect, useState } from "react";
// import { BaseURL, ImageUrl, options } from "./requestConfig";

function App() {
  // const [poster, setPoster] = useState<string>("");

  // useEffect(() => {
  //   axios.get(BaseURL, options).then((res) => {
  //     const poster = res!.data.results[6].poster_path;
  //     setPoster(poster);
  //   });
  // }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<MovieHome />} />
            <Route path="tv" element={<TvHome />} />
            <Route path="watchlist/" element={<WatchList />} />
            <Route path="*" />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
