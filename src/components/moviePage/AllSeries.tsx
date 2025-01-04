import MoviesBrand from "../brand/MoviesBrand";
import Pagination from "../pagination/Pagination";
import HomeError from "../errorPage/HomeError";
import AllMoviesLoading from "../loading/AllMoviesLoading";
import { useTvStore } from "../../store/TvStore";
import { useTvPageStore } from "../../store/TvPageStore";
import { useEffect } from "react";
import { DISCOVER_TV } from "../../api/urls";
import AllMoviesContent from "./AllMoviesContent";

function AllSeries() {
  const { tv, tvIsLoading, tvIsError, fetchTv } = useTvStore();
  const { pageNumber, setPageNumber } = useTvPageStore();

  useEffect(() => {
    fetchTv(DISCOVER_TV + `&page=${pageNumber}`);
  }, [fetchTv, pageNumber]);

  return (
    <div className="flex flex-col m-5 md:px-64 gap-10 mb-28">
      <MoviesBrand name="series" />
      {tvIsError ? (
        <HomeError />
      ) : tvIsLoading ? (
        <AllMoviesLoading />
      ) : (
        <AllMoviesContent movies={tv} />
      )}
      <Pagination pageNum={pageNumber} setPageNum={setPageNumber} />
    </div>
  );
}

export default AllSeries;
