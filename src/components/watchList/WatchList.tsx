import Header from "./Header";
import ListContent from "./ListContent";

function WatchList() {
  return (
    <>
      <div className="flex flex-col gap-5 p-3">
        <Header />
        <div className="flex flex-col justify-between">
          <ListContent />
        </div>
      </div>
    </>
  );
}

export default WatchList;
