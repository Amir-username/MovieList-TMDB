import { useState } from "react";
import TabItem from "./TabItem";

function Tabs() {
  const [atcive, setActive] = useState<string>("movies");

  return (
    <div className="flex justify-center gap-20 border-b-2 border-gray-200">
      <TabItem text="movies" active={atcive} setActive={setActive} />
      <TabItem text="tv show" active={atcive} setActive={setActive} />
    </div>
  );
}
export default Tabs;
