import { Movie } from "../../models/Movie";

type AddToListProps = {
  movie: Movie;
  setSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddToList({ movie, setSnackbar }: AddToListProps) {
  const onAdd = () => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      const currMovies: Movie[] = JSON.parse(watchlist);

      if (!currMovies.some((movieItem) => movieItem.id === movie.id)) {
        const newList = [...currMovies, movie];
        localStorage.setItem("watchlist", JSON.stringify(newList));

        setSnackbar(true);

        setTimeout(() => {
          setSnackbar(false);
        }, 2000);
      }
    } else {
      const newList = [movie];
      localStorage.setItem("watchlist", JSON.stringify(newList));

      setSnackbar(true);

      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={onAdd}
        className="flex p-4 rounded-full bg-emerald-500 gap-1 w-fit
         hover:bg-emerald-500 dark:hover:bg-emerald-400 cursor-pointer"
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
