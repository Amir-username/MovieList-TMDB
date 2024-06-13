function EmptyList() {
  return (
    <div className="flex flex-col items-center justify-center mt-64 gap-3">
      <span className="material-symbols-outlined text-8xl text-emerald-600">list_alt</span>
      <span className="text-2xl text-emerald-600 font-semibold">your watchlist is empty</span>
    </div>
  );
}

export default EmptyList;
