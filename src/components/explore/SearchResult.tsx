import { useState } from "react";
import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import Tabs from "./Tabs";
import AllSeriesContent from "../moviePage/AllSeriesContent";
import { Credit } from "../../models/Credit";
import AllCredits from "../credits/AllCredits";

type SearchResultProps = {
  movieResult: Movie[];
  tvResult: Tv[];
  personResult: Credit[];
};

function SearchResult({ movieResult, tvResult, personResult }: SearchResultProps) {
  const [tabState, setTabState] = useState<string>("movies");
  return (
    <div className="flex flex-col gap-8 md:px-52 mb-20">
      <Tabs setTabState={setTabState} />
      {tabState === "tv show" ? (
        <AllSeriesContent series={tvResult} />
      ) : tabState == 'person' ? (
        <AllCredits persons={personResult} />
      ) : (
        <AllMoviesContent movies={movieResult} />
      )}
    </div>
  );
}

export default SearchResult;
