import { Movie } from "../../models/Movie";

type AddToListProps = {
  movie: Movie;
};

function AddToList({ movie }: AddToListProps) {
  const onAdd = () => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      const currMovies = JSON.parse(watchlist);
      const newList = [...currMovies, movie];

      localStorage.setItem("watchlist", JSON.stringify(newList));
    } else {
      const newList = [movie];
      localStorage.setItem("watchlist", JSON.stringify(newList));
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={onAdd}
        className="flex p-4 rounded-full bg-emerald-500 gap-1 w-fit"
      >
        <div className="text-white font-semibold text-lg">Add To List</div>
        <span className="material-symbols-outlined text-white text-xl font-bold">
          add
        </span>
      </div>
    </div>
  );
}

export default AddToList;
