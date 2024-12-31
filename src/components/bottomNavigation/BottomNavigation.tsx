import BottomNavigationItem from "./‌‌BottomNavigationItem";

function BottomNavigation() {
  return (
    <>
      <div className="fixed left-0 right-0 flex items-center justify-between w-full h-20 px-8 rounded-full shadow-md bg-light dark:bg-dark bottom-2 md:bottom-52 md:left-4 md:flex-col md:py-8 md:justify-center md:gap-20 md:w-20 ring-1 ring-gray-200 dark:ring-gray-800 dark:shadow-sm dark:shadow-primary-dark md:h-fit">
        <BottomNavigationItem icon="movie" link="/" name="movies" />
        <BottomNavigationItem icon="search" link="/explore/" name="explore" />
        <BottomNavigationItem
          icon="format_list_bulleted_add"
          link="/watchlist/"
          name="watchlist"
        />
      </div>
    </>
  );
}

export default BottomNavigation;
