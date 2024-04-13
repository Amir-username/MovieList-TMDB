import { Genre } from "../../models/Genre";
import GenreItem from "./GenreItem";

type GenresProps = {
  genres: Genre[];
};

const Colors = [
  "bg-red-700",
  "bg-blue-700",
  "bg-yellow-700",
  "bg-teal-700",
  "bg-orange-700",
  "bg-lime-700",
  "bg-cyan-700",
  "bg-pink-700",
  "bg-rose-700",
  "bg-amber-700",
];

function Genres({ genres }: GenresProps) {
  return (
    <div className="flex flex-wrap gap-1 mb-20 bg">
      {genres.map((genre) => {
        return (
          <GenreItem
            key={genre.id}
            name={genre.name}
            color={Colors[Math.floor(Math.random() * Colors.length)]}
          />
        );
      })}
    </div>
  );
}

export default Genres;
