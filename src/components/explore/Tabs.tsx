import TabItem from "./TabItem";

type TabsProps = {
  tabState: string;
  setTabState: React.Dispatch<React.SetStateAction<string>>;
  tabs: string[];
};

function Tabs({ tabState, tabs, setTabState }: TabsProps) {
  return (
    <div className="flex justify-center gap-20 border-b-2 border-gray-100 dark:border-gray-800">
      {tabs.map((tab, i) => {
        return (
          <TabItem text={tab} tabState={tabState} setTabState={setTabState} key={i}/>
        );
      })}
    </div>
  );
}
export default Tabs;
