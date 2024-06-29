type PaginationProps = {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({ pageNum, setPageNum }: PaginationProps) {
  const onFirst = () => {
    setPageNum(1);
  };

  const onNext = () => {
    if (pageNum < 500) setPageNum((num) => num + 1);
  };

  const onBack = () => {
    if (pageNum > 1) setPageNum((num) => num - 1);
  };

  const onLast = () => {
    setPageNum(500);
  };

  return (
    <div className="flex gap-2 justify-center items-center">
      <div
        onClick={onFirst}
        className={`pl-2 p-2 pt-1.5 w-12 h-12 text-center rounded-lg
        text-white ${
          pageNum == 1
            ? "bg-gray-400 dark:bg-gray-500"
            : "bg-amber-600 dark:bg-amber-500 cursor-pointer"
        }`}
      >
        <span className="material-symbols-outlined text-3xl">
          keyboard_double_arrow_left
        </span>
      </div>
      <div
        onClick={onBack}
        className={`pl-3 p-2 pt-2.5 w-12 h-12 text-center rounded-lg text-white ${
          pageNum == 1
            ? "bg-gray-400 dark:bg-gray-500"
            : "bg-amber-600 dark:bg-amber-500 cursor-pointer"
        }`}
      >
        <span className="material-symbols-outlined text-xl font-bold">
          arrow_back_ios
        </span>
      </div>
      <div
        className="pt-1.5 w-12 h-12 text-center rounded-lg bg-amber-600 dark:bg-amber-500
       text-white "
      >
        <span className="text-2xl font-semibold">{pageNum}</span>
      </div>
      <div
        onClick={onNext}
        className={`pr-2 p-2 pt-2.5 w-12 text-center h-12 rounded-lg text-white ${
          pageNum == 500
            ? "bg-gray-400 dark:bg-gray-500"
            : "bg-amber-600 dark:bg-amber-500 cursor-pointer"
        }`}
      >
        <span className="material-symbols-outlined text-xl font-bold">
          arrow_forward_ios
        </span>
      </div>
      <div
        onClick={onLast}
        className={`pl-2 p-2 pt-1.5 w-12 h-12 text-center rounded-lg
        text-white ${
          pageNum == 500
            ? "bg-gray-400 dark:bg-gray-500"
            : "bg-amber-600 dark:bg-amber-500 cursor-pointer"
        }`}
      >
        <span className="material-symbols-outlined text-3xl">
          keyboard_double_arrow_right
        </span>
      </div>
    </div>
  );
}

export default Pagination;
