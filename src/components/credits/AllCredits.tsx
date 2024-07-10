import { Credit } from "../../models/Credit";
import AllCreditItem from "./AllCreditItem";

type AllCreditsProps = {
  persons: Credit[];
};

function AllCredits({ persons }: AllCreditsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-5 content-between">
      {persons?.map((person) => {
        return <AllCreditItem person={person} key={person.id} />;
      })}
    </div>
  );
}

export default AllCredits;
