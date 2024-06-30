import { Link } from "react-router-dom";

type BottomNavigationItemProps = {
  name: string;
  icon: string;
  link: string;
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
};

function BottomNavigationItem({
  icon,
  link,
  name,
  activeItem,
  setActiveItem,
}: BottomNavigationItemProps) {
  const onItemClick = () => {
    setActiveItem(name);
  };

  return (
    <Link to={link}>
      <div
        className="flex flex-col justify-center items-center"
        onClick={onItemClick}
      >
        <span
          className={`material-symbols-outlined text-3xl duration-500 ${
            activeItem === name
              ? "dark:text-primary-dark text-primary-light"
              : "text-gray-400"
          }`}
        >
          {icon}
        </span>
        <div
          className={`text-base duration-1000 ${
            activeItem === name
              ? "dark:text-primary-dark text-primary-light"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {name}
        </div>
      </div>
    </Link>
  );
}

export default BottomNavigationItem;
