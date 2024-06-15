import { useNavigate } from "react-router-dom";

type MovieBackDropProps = {
  image: string;
};

function MovieBackDrop({ image }: MovieBackDropProps) {
  const navigate = useNavigate();

  return (
    <div className="relative md:px-32">
      {/* <Link to={'../movie-details'}> */}
      <span
        onClick={() => navigate(-1)}
        className="absolute left-2 top-3 material-symbols-outlined text-gray-100 text-3xl cursor-pointer"
      >
        arrow_back
      </span>
      {/* </Link> */}
      <img
        src={image}
        alt="movie poster"
        className="w-full h-full md:h-96 md:brightness-50 object-cover"
      />
    </div>
  );
}

export default MovieBackDrop;
