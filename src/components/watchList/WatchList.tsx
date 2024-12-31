import { useState } from "react";
import Tabs from "../explore/Tabs";
import Header from "./Header";
import ListContent from "./ListContent";
import ListContentTv from "./ListContentTv";

function WatchList() {
  const [tabState, setTabState] = useState<string>("movies");

  return (
    <>
      <div className="flex flex-col gap-5 p-3 md:gap-10 md:px-40">
        <Header />
        <div className="flex flex-col justify-between md:px-[15rem] gap-5">
          <Tabs  tabState={tabState} setTabState={setTabState} tabs={["movies", "tv show"]}/>
          {tabState === "movies" ? <ListContent /> : <ListContentTv />}
        </div>
      </div>
    </>
  );
}

export default WatchList;
