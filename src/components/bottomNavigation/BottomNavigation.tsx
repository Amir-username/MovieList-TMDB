import BottomNavigationItem from "./‌‌BottomNavigationItem";

function BottomNavigation() {
  return (
    <>
      <div className="bg-white fixed bottom-2 left-0 right-0 flex items-center px-8 justify-between w-full rounded-full ring-1 ring-gray-200 shadow-lg h-20">
        <BottomNavigationItem name="home" link="/"/>
        <BottomNavigationItem name="explore" link="explore/"/>
        <BottomNavigationItem name="watchlist" link="watchlist/"/>
      </div>
    </>
  );
}

export default BottomNavigation;
