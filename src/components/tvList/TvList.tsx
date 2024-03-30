import { Tv } from "../../models/Tv";

type TvListProps = {
  series: Tv[];
};

function TvList({ series }: TvListProps) {
  return (
    <div>
      {series.map((series: Tv) => {
        return <p key={series.id}>{series.name}</p>;
      })}
    </div>
  );
}

export default TvList;
