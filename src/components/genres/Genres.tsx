import { Genre } from "../../models/Genre";

type GenresProps = {
  genres: Genre[];
};

function Genres({ genres }: GenresProps) {
  return (
    <div>
      {genres.map((genre) => {
        return <p key={genre.id}>{genre.name}</p>;
      })}
    </div>
  );
}

export default Genres;
