import { Link, useLocation } from "react-router-dom";

type BottomNavigationItemProps = {
  name: string;
  icon: string;
  link: string;
};

function BottomNavigationItem({
  icon,
  link,
  name,
}: BottomNavigationItemProps) {
  const location = useLocation();


  return (
    <Link to={link}>
      <div
        className="flex flex-col items-center justify-center"
      >
        <span
          className={`material-symbols-outlined text-3xl duration-500 ${
            location.pathname == link
              ? "dark:text-primary-dark text-primary-light"
              : "text-gray-400"
          }`}
        >
          {icon}
        </span>
        <div
          className={`text-base duration-1000 font-main-font ${
            location.pathname == link
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
