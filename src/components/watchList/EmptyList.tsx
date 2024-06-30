function EmptyList() {
  return (
    <div className="flex flex-col items-center justify-center mt-64 gap-3">
      <span className="material-symbols-outlined text-8xl text-primary-light dark:text-primary-dark">
        list_alt
      </span>
      <span className="text-2xl text-primary-light dark:text-primary-dark font-main-font">
        your watchlist is empty
      </span>
    </div>
  );
}

export default EmptyList;
