import { Link } from "react-router-dom";
import { Credit } from "../../models/Credit";
import { ImageUrl } from "../../requestConfig";
import ImageLoading from "../loading/ImageLoading";

type AllCreditItemProps = {
  person: Credit;
};

function AllCreditItem({ person }: AllCreditItemProps) {
  return (
    <Link to={"../credit-details"} state={person}>
      <div className="flex flex-col flex-shrink-0 gap-2 items-center w-36 h-full">
        {person.profile_path ? (
          <img
            src={ImageUrl + person.profile_path}
            alt="movie poster"
            className="w-36 h-52 rounded-lg"
          />
        ) : (
          <ImageLoading type="person" />
        )}
        <div className="text-md text-gray-600 dark:text-gray-400 font-main-font">
          {person.name}
        </div>
        <div className="text-base text-gray-400 dark:text-gray-300 font-main-font">
          {person.known_for_department}
        </div>
      </div>
    </Link>
  );
}

export default AllCreditItem;
