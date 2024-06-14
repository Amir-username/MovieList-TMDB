import { useLocation } from "react-router-dom";
import MoviesBrand from "../brand/MoviesBrand";
import AllSeriesContent from "./AllSeriesContent";

function AllSeries() {
  const location = useLocation();

  return (
    <div className="flex flex-col m-5 md:px-20 gap-10 mb-28">
      <MoviesBrand name="series" />
      <AllSeriesContent series={location.state} />
    </div>
  );
}

export default AllSeries;
