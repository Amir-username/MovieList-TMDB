import ModalHeader from "./ModalHeader";
import Rating from "./Rating";

type RatingModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function RatingModal({ isOpen, setIsOpen }: RatingModalProps) {
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
            <Rating />
            <div className="flex items-center justify-center">
              <div className="flex items-center cursor-pointer hover:bg-primary-dark dark:hover:bg-primary-light justify-center gap-2 bg-primary-light dark:bg-primary-dark rounded-full w-32 h-11">
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
