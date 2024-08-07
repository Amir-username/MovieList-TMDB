import { Credit } from "../../models/Credit";
import { ImageUrl } from "../../requestConfig";

type CreditInfoProps = {
  credit: Credit;
};

function CreditInfo({ credit }: CreditInfoProps) {
  return (
    <div className="flex flex-col p-5 justify-center items-center gap-4">
      <img
        src={ImageUrl + credit.profile_path}
        alt="credit"
        className="w-64 h-96 rounded-3xl"
      />
      <div className="text-3xl font-main-font text-gray-700 dark:text-gray-300">
        {credit.name}
      </div>
      <div className="flex gap-2">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          theater_comedy
        </span>
        <div className="text-lg text-gray-500 dark:text-gray-400 font-main-font">
          {credit.known_for_department}
        </div>
      </div>
      <div className="flex gap-2">
        <span className="material-symbols-outlined text-primary-light dark:text-primary-dark text-xl">
          cake
        </span>
        <div className="text-lg text-gray-500 dark:text-gray-400 font-main-font">
          {credit.birthday}
        </div>
      </div>
      <div className="text-xl text-left text-gray-500 dark:text-gray-400 font-main-font">
        {credit.biography}
      </div>
    </div>
  );
}

export default CreditInfo;
