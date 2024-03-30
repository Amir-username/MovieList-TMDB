import { Link } from "react-router-dom";

type BottomNavigationItemProps = {
  name: string;
  link: string;
};

function BottomNavigationItem({ name, link }: BottomNavigationItemProps) {
  return (
    <Link to={link}>
      <div>{name}</div>
    </Link>
  );
}

export default BottomNavigationItem;
