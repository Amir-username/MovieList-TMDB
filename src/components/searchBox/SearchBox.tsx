import { Movie } from "../../models/Movie";
import { Tv } from "../../models/Tv";
import { Credit } from "../../models/Credit";
import { useSearch } from "../../hooks/useSearch";
import { useState } from "react";

type SearchBoxProps = {
  setMovieResult: React.Dispatch<React.SetStateAction<Movie[]>>;
  setTvResult: React.Dispatch<React.SetStateAction<Tv[]>>;
  setPersonResult: React.Dispatch<React.SetStateAction<Credit[]>>;
};

function SearchBox({
  setMovieResult,
  setTvResult,
  setPersonResult,
}: SearchBoxProps) {
  const [search, setSearch] = useState<string>("");

  useSearch(search, "movie", setMovieResult);
  useSearch(search, "tv", setTvResult);
  useSearch(search, "person", setPersonResult);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onCancel = () => {
    setSearch("");
  };

  return (
    <div className="flex items-center justify-center w-full md:w-96">
      <div className="relative">
        <span className="text-xl top-0.5 absolute inset-y-0 start-0 flex items-center ps-3 material-symbols-outlined text-gray-400">
          search
        </span>
      </div>
      <input
        onChange={onSearch}
        value={search}
        className="font-main-font text-lg dark:bg-gray-900 placeholder:text-gray-400 pl-10 text-gray-600 dark:text-gray-300 ring-1
         focus:outline-none border-0 focus:ring-2 focus:ring-primary-dark
         ring-gray-300 dark:ring-primary-dark p-4 rounded-full w-full"
        placeholder="search movies"
      />
      {search && (
        <div className="relative">
          <span
            onClick={onCancel}
            className="text-xl cursor-pointer top-0.5 absolute inset-y-0 end-5 flex items-center ps-3 material-symbols-outlined text-gray-400"
          >
            close
          </span>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
