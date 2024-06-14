import { useState } from "react";
import TabItem from "./TabItem";

type TabsProps = {
  setTabState: React.Dispatch<React.SetStateAction<string>>;
};

function Tabs({ setTabState }: TabsProps) {
  const [atcive, setActive] = useState<string>("movies");

  return (
    <div className="flex justify-center gap-20 border-b-2 border-gray-50">
      <TabItem
        text="movies"
        active={atcive}
        setActive={setActive}
        setTabState={setTabState}
      />
      <TabItem
        text="tv show"
        active={atcive}
        setActive={setActive}
        setTabState={setTabState}
      />
    </div>
  );
}
export default Tabs;
