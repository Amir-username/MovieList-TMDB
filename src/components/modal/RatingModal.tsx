import { useState } from "react";
import ModalHeader from "./ModalHeader";
import Rating from "./Rating";
import { MovieRate } from "../../models/MovieRate";

type RatingModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieId: number;
};

function RatingModal({ isOpen, setIsOpen, movieId }: RatingModalProps) {
  const [rate, setRate] = useState<number>(0);

  const onAdd = () => {
    const data = localStorage.getItem("myRate");
    const allRates: MovieRate[] = data ? JSON.parse(data) : [];
    const myRate: MovieRate = new MovieRate(movieId, rate);
    let rated = false;

    const newAllRate = allRates.map((i) => {
      if (i.movieId === myRate.movieId) {
        rated = true;
        return { ...i, rate: myRate.rate };
      }
      return i;
    });

    if (rated) {
      localStorage.setItem("myRate", JSON.stringify(newAllRate));
    } else {
      localStorage.setItem("myRate", JSON.stringify([...newAllRate, myRate]));
    }

    setIsOpen(false)
  };

  return (
    <div
      className={`${
        !isOpen && "hidden"
      } fixed right-0 left-0 z-50 w-full h-screen md:inset-0 backdrop-brightness-50`}
    >
      <div className="relative p-4 w-full h-full top-52 md:w-fit md:mx-96">
        <div className="relative bg-white rounded-lg shadow dark:bg-slate-900 p-4 md:mx-36">
          <div className="flex flex-col gap-8">
            <ModalHeader title="your rate" setIsOpen={setIsOpen} />
            <Rating rate={rate} setRate={setRate} />
            <div className="flex items-center justify-center">
              <div
                onClick={onAdd}
                className="flex items-center cursor-pointer hover:bg-primary-dark dark:hover:bg-primary-light justify-center gap-2 bg-primary-light dark:bg-primary-dark rounded-full w-32 h-11"
              >
                <span className="text-white font-semibold text-xl">Add</span>
                <span className="material-symbols-outlined text-white">
                  add
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingModal;
