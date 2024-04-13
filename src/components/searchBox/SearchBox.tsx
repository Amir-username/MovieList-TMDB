function SearchBox() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <span className="text-xl top-0.5 absolute inset-y-0 start-0 flex items-center ps-3 material-symbols-outlined text-gray-400">
          search
        </span>
      </div>
      <input
        className="placeholder:text-gray-400 pl-10 text-gray-600 ring-1 focus:outline-none border-0 focus:ring-2 focus:ring-emerald-400 ring-gray-300 p-4 rounded-full w-full"
        placeholder="search movies"
      />
    </div>
  );
}

export default SearchBox;
