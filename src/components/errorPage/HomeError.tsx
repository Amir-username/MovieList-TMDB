function HomeError() {
  return (
    <div className="flex justify-center items-center mt-80">
      <div className="flex flex-col gap-2">
        <span className="material-symbols-outlined text-red-600 text-7xl text-center">
          error
        </span>
        <div className="text-2xl text-red-600 font-semibold">error with loading</div>
      </div>
    </div>
  );
}

export default HomeError;
