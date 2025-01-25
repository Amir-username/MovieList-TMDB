import { useEffect } from "react";
import { useGenreStore } from "../../store/GenresStore";
import GenreItem from "./GenreItem";
import { genreBackdrops } from "../../assets/image/genres";

type GenresProps = {
  type: "movie" | "tv";
};

function Genres({ type }: GenresProps) {
  const { genres, fetchGenres } = useGenreStore();

  useEffect(() => {
    fetchGenres(type);
  }, [fetchGenres, type]);

  return (
    <div className="flex flex-col gap-5 mb-32 lg:mb-0">
      <div className="flex flex-wrap justify-center gap-32 mb-20 md:gap-2 md:items-center">
        {genres.map((genre, i) => {
          return (
            <GenreItem
              key={genre.id}
              genre={genre}
              title={type}
              backDrop={genreBackdrops[i]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Genres;
