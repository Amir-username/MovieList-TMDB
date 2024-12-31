import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { Movie } from "../../models/Movie";
import EmptyList from "./EmptyList";

function ListContent() {
  const [watchlist, setWatchList] = useState<Movie[]>([]);

  useEffect(() => {
    const currList = localStorage.getItem("watchlist");
    if (currList) {
      setWatchList(JSON.parse(currList));
    }
  }, []);

  if (watchlist.length > 0) {
    return (
      <div className="flex flex-col gap-5 md:flex-wrap md:flex-row md:justify-between">
        {watchlist.map((movie) => {
          return (
            <ListItem
              movie={movie}
              key={movie.id}
              setWatchList={setWatchList}
            />
          );
        })}
      </div>
    );
  } else {
    return <EmptyList />;
  }
}

export default ListContent;
