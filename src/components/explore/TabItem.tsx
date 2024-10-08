type TabItemProps = {
  text: string;
  tabState: string
  setTabState: React.Dispatch<React.SetStateAction<string>>;
};

function TabItem({ text, tabState, setTabState }: TabItemProps) {
  const onActive = () => {
    setTabState(text);
  };

  return (
    <div
      onClick={onActive}
      className={`py-3 text-md text-center duration-300 cursor-pointer font-main-font ${
        tabState === text
          ? "border-b border-primary-light text-primary-light dark:text-primary-dark dark:border-primary-dark"
          : "text-gray-400 hover:text-amber-400"
      }`}
    >
      {text}
    </div>
  );
}

export default TabItem;
