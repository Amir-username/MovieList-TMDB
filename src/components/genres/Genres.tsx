import { Genre } from "../../models/Genre";
import GenreItem from "./GenreItem";

type GenresProps = {
  genres: Genre[];
  title: string;
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

function Genres({ genres, title }: GenresProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2 md:gap-2 mb-20 md:items-center md:justify-center justify-center">
        {genres.map((genre) => {
          return (
            <GenreItem
              key={genre.id}
              genre={genre}
              title={title}
              color={Colors[Math.floor(Math.random() * Colors.length)]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Genres;
