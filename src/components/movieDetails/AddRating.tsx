type AddRatingProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddRating({ setOpen }: AddRatingProps) {
  const onOpen = () => {
    setOpen(true);
  };

  return (
    <span
      onClick={onOpen}
      className="material-symbols-outlined text-primary-light dark:text-primary-dark text-2xl md:text-3xl cursor-pointer"
    >
      add_circle
    </span>
  );
}

export default AddRating;
