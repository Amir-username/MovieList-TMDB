type TabItemProps = {
  text: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setTabState: React.Dispatch<React.SetStateAction<string>>;
};

function TabItem({ text, active, setActive, setTabState }: TabItemProps) {
  const onActive = () => {
    setActive(text);
    setTabState(text);
  };

  return (
    <div
      onClick={onActive}
      className={`p-3 text-xl text-center duration-500 cursor-pointer font-main-font ${
        active === text
          ? "border-b border-primary-light text-primary-light dark:text-primary-dark dark:border-primary-dark"
          : "text-gray-400 hover:text-amber-400"
      }`}
    >
      {text}
    </div>
  );
}

export default TabItem;
