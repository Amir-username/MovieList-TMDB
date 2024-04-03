import { Tv } from "../../models/Tv";
import AllSeriesItem from "./AllSeriesItem";

type AllSeriesContentProps = {
    series: Tv[]
}


function AllSeriesContent({series}:AllSeriesContentProps) {
  return (
    <div className="flex flex-wrap justify-center gap-5 content-between">
      {series.map((tv) => {
        return <AllSeriesItem tv={tv} key={tv.id} />;
      })}
    </div>
  );
}

export default AllSeriesContent;
