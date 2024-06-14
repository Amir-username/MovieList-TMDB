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
      className={`p-3 text-lg text-center duration-500 ${
        active === text
          ? "border-b border-emerald-500 text-emerald-500"
          : "text-gray-400"
      }`}
    >
      {text}
    </div>
  );
}

export default TabItem;
