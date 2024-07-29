import { useEffect, useState } from "react";
import EmptyList from "./EmptyList";
import { Tv } from "../../models/Tv";
import ListItemTv from "./ListItemTv";

function ListContentTv() {
  const [watchlist, setWatchList] = useState<Tv[]>([]);

  useEffect(() => {
    const currList = localStorage.getItem("watchlistTv");
    if (currList) {
      setWatchList(JSON.parse(currList));
    }
  }, []);

  if (watchlist.length > 0) {
    return (
      <div className="flex flex-col md:flex-wrap md:flex-row gap-2">
        {watchlist.map((tv) => {
          return <ListItemTv tv={tv} key={tv.id} setWatchList={setWatchList} />;
        })}
      </div>
    );
  } else {
    return <EmptyList />;
  }
}

export default ListContentTv;
