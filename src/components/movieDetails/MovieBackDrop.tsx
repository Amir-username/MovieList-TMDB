import { useNavigate } from "react-router-dom";

type MovieBackDropProps = {
  image: string;
};

function MovieBackDrop({ image }: MovieBackDropProps) {
  const navigate = useNavigate();

  return (
    <div className="relative md:px-64">
      {/* <Link to={'../movie-details'}> */}
      <span
        onClick={() => navigate(-1)}
        className="absolute text-3xl text-gray-100 cursor-pointer left-2 top-3 material-symbols-outlined"
      >
        arrow_back
      </span>
      {/* </Link> */}
      <img
        src={image}
        alt="movie poster"
        className="object-cover w-full h-full md:h-96 md:brightness-50"
      />
    </div>
  );
}

export default MovieBackDrop;
