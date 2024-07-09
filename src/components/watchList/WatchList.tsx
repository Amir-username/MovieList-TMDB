import Header from "./Header";
import ListContent from "./ListContent";

function WatchList() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-16 p-3 md:px-40">
        <Header />
        <div className="flex flex-col justify-between md:px-52">
          <ListContent />
        </div>
      </div>
    </>
  );
}

export default WatchList;
