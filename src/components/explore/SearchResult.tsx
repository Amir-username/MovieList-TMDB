import { useState } from "react";
import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import Tabs from "./Tabs";
import AllSeriesContent from "../moviePage/AllSeriesContent";

type SearchResultProps = {
  movieResults: Movie[];
  tvResults: Tv[];
};

function SearchResult({ movieResults, tvResults }: SearchResultProps) {
  const [tabState, setTabState] = useState<string>("movies");
  return (
    <div className="flex flex-col gap-8 md:px-52">
      <Tabs setTabState={setTabState} />
      {tabState === "tv show" ? (
        <AllSeriesContent series={tvResults} />
      ) : (
        <AllMoviesContent movies={movieResults} />
      )}
    </div>
  );
}

export default SearchResult;
