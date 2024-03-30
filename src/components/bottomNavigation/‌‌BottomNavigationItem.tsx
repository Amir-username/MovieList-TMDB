import { Link } from "react-router-dom";

type BottomNavigationItemProps = {
  name: string;
  icon: string;
  link: string;
};

function BottomNavigationItem({ icon, link, name }: BottomNavigationItemProps) {
  return (
    <Link to={link}>
      <div className="flex flex-col justify-center items-center">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
      <div className="font-semibold">{name}</div>
      </div>
    </Link>
  );
}

export default BottomNavigationItem;
