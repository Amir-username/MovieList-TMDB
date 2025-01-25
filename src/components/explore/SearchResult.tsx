import { useState } from "react";
import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import Tabs from "./Tabs";
import { Credit } from "../../models/Credit";
import AllCredits from "../credits/AllCredits";

type SearchResultProps = {
  movieResult: Movie[];
  tvResult: Tv[];
  personResult: Credit[];
};

function SearchResult({
  movieResult,
  tvResult,
  personResult,
}: SearchResultProps) {
  const [tabState, setTabState] = useState<string>("movies");
  return (
    <div className="flex flex-col gap-8 mb-20 md:px-56">
      <Tabs
        setTabState={setTabState}
        tabState={tabState}
        tabs={["movies", "tv show", "person"]}
      />
      <main className="flex items-center justify-center pl-12">
        {tabState === "tv show" ? (
          <AllMoviesContent movies={tvResult} />
        ) : tabState == "person" ? (
          <AllCredits persons={personResult} />
        ) : (
          <AllMoviesContent movies={movieResult} />
        )}
      </main>
    </div>
  );
}

export default SearchResult;
