import { useEffect, useState } from "react";
import Genres from "../genres/Genres";
import SearchBox from "../searchBox/SearchBox";
import { Genre } from "../../models/Genre";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";

function Explore() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    axios.get(BaseURL + "/genre/movie/list", options).then((res) => {
      const genreList = res.data.genres;
      setGenres(genreList);
    });
  }, []);

  return (
    <div>
      <SearchBox />
      <Genres genres={genres} />
    </div>
  );
}

export default Explore;
