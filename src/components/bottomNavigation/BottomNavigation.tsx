import BottomNavigationItem from "./‌‌BottomNavigationItem";

function BottomNavigation() {
  return (
    <>
      <div className="bg-white fixed bottom-2 left-0 right-0 flex items-center px-8 justify-between w-full rounded-full ring-1 ring-gray-200 shadow-lg h-20">
        <BottomNavigationItem icon="movie" link="/" name="movies"/>
        <BottomNavigationItem icon="search" link="explore/" name="explore"/>
        <BottomNavigationItem icon="format_list_bulleted_add" link="watchlist/" name="watchlist"/>
      </div>
    </>
  );
}

export default BottomNavigation;
