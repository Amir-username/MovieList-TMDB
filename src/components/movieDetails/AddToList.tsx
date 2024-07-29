type AddToListProps = {
  movie: any;
  setSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  localKey: string
};

function AddToList({ movie, setSnackbar, localKey }: AddToListProps) {

  const onAdd = () => {
    const watchlist = localStorage.getItem(localKey);
    if (watchlist) {
      const currMovies = JSON.parse(watchlist);

      if (!currMovies.some((movieItem: any) => movieItem.id === movie.id)) {
        const newList = [...currMovies, movie];
        localStorage.setItem(localKey, JSON.stringify(newList));

        setSnackbar(true);

        setTimeout(() => {
          setSnackbar(false);
        }, 2000);
      }
    } else {
      const newList = [movie];
      localStorage.setItem(localKey, JSON.stringify(newList));

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
        className="flex p-4 rounded-full bg-primary-light dark:bg-primary-dark gap-1 w-fit
         hover:bg-primary-dark dark:hover:bg-primary-light cursor-pointer"
      >
        <div className="text-white font-semibold text-lg font-main-font">
          Add To List
        </div>
        <span className="material-symbols-outlined text-white text-xl">
          add
        </span>
      </div>
    </div>
  );
}

export default AddToList;
