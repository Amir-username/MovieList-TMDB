import { Link } from "react-router-dom";
import { Genre } from "../../models/Genre";

type GenreItemProps = {
  genre: Genre;
  color: string;
  title: string;
};

function GenreItem({ genre, color, title }: GenreItemProps) {
  return (
    <Link to={"../genre/"} state={{
      genre,
      title
    }}>
      <div
        className={`flex w-40 h-28 rounded-lg p-5 ${color} items-center justify-center`}
      >
        <span className="text-xl text-white font-main-font">{genre.name}</span>
      </div>
    </Link>
  );
}

export default GenreItem;
