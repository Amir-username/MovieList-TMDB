import { Credit } from "../../models/Credit";
import AllCreditItem from "./AllCreditItem";

type AllCreditsProps = {
  persons: Credit[];
};

function AllCredits({ persons }: AllCreditsProps) {
  return (
    <div className="flex flex-wrap content-between justify-center gap-5 md:justify-start md:gap-8">
      {persons?.map((person) => {
        return <AllCreditItem person={person} key={person.id} />;
      })}
    </div>
  );
}

export default AllCredits;
