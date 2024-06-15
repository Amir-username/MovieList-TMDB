import { useState } from "react";
import BottomNavigationItem from "./‌‌BottomNavigationItem";

function BottomNavigation() {
  const [activeItem, setActiveItem] = useState<string>("movies");

  return (
    <>
      <div className="bg-white dark:bg-gray-900 fixed bottom-2 md:bottom-52 
      left-0 md:left-4 right-0 flex md:flex-col items-center px-8 md:py-8 justify-between md:justify-center 
      md:gap-20 w-full md:w-20 rounded-full ring-1
       ring-gray-200 dark:ring-gray-800 shadow-lg dark:shadow-md dark:shadow-emerald-900 h-20 md:h-fit">
        <BottomNavigationItem
          icon="movie"
          link="/"
          name="movies"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <BottomNavigationItem
          icon="search"
          link="explore/"
          name="explore"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <BottomNavigationItem
          icon="format_list_bulleted_add"
          link="watchlist/"
          name="watchlist"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </>
  );
}

export default BottomNavigation;
