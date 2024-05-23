import { Movie } from "../../models/Movie";
import AllMoviesContent from "../moviePage/AllMoviesContent";
import Tabs from "./Tabs";

type SearchResultProps = {
  movieResults: Movie[];
};

function SearchResult({ movieResults }: SearchResultProps) {
  return (
    <div className="flex flex-col gap-8">
      <Tabs />
      <AllMoviesContent movies={movieResults} />
    </div>
  );
}

export default SearchResult;
