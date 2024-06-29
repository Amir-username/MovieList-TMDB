import MoviesBrand from "../brand/MoviesBrand";
import AllSeriesContent from "./AllSeriesContent";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import { Tv } from "../../models/Tv";
import { BaseURL, options } from "../../requestConfig";
import axios from "axios";
import HomeError from "../errorPage/HomeError";
import AllMoviesLoading from "../loading/AllMoviesLoading";

function AllSeries() {
  const [series, setSeries] = useState<Tv[]>([]);
  const [seriesLoading, setSeriesLoading] = useState<boolean>(false);
  const [seriesError, setSeriesError] = useState<boolean>(false);

  const [tvPage, setTvPage] = useState<number>(1);

  useEffect(() => {
    setSeriesLoading(true);

    const fetchSeries = async () => {
      try {
        const res = await axios.get(
          BaseURL + `/discover/tv?page=${tvPage}&sort_by=vote_count.desc`,
          options
        );
        const data = await res.data;
        setSeries(data.results);
        setSeriesLoading(false);
      } catch (error: any) {
        setSeriesError(true);
        console.log(error.message);
      }
    };

    fetchSeries();
  }, [tvPage]);

  return (
    <div className="flex flex-col m-5 md:px-20 gap-10 mb-28">
      <MoviesBrand name="series" />
      {seriesError ? (
        <HomeError />
      ) : seriesLoading ? (
        <AllMoviesLoading />
      ) : (
        <AllSeriesContent series={series} />
      )}
      <Pagination pageNum={tvPage} setPageNum={setTvPage} />
    </div>
  );
}

export default AllSeries;
