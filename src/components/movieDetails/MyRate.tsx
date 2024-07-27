import { MovieRate } from "../../models/MovieRate";
import STAR from "../../assets/svg/FullStar.svg";

type YourRateProps = {
  rate: MovieRate;
};

function YourRate({ rate }: YourRateProps) {
  return (
    <div className="flex gap-1 px-2 items-center ring-1 ring-primary-light dark:ring-primary-dark w-fit mx-2 rounded-full">
      <img src={STAR} alt="star" className="w-5 h-5 mb-0.5" />
      <span className="text-gray-700 dark:text-gray-300 text-xl font-title-font">
        your rate :
        <span className="text-primary-light dark:text-primary-dark text-2xl font-title-font ml-2">
          {rate.rate}
        </span>
      </span>
    </div>
  );
}

export default YourRate;
