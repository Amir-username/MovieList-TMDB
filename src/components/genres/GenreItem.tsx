import { Link } from "react-router-dom";
import { Genre } from "../../models/Genre";

type GenreItemProps = {
  genre: Genre;
  color: string;
};

function GenreItem({ genre, color }: GenreItemProps) {
  return (
    <Link to={"../genre/"} state={genre}>
      <div
        className={`flex w-48 h-48 rounded-lg p-5 ${color} items-center justify-center`}
      >
        <span className="text-xl font-semibold text-white">{genre.name}</span>
      </div>
    </Link>
  );
}

export default GenreItem;
