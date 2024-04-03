import { Link } from "react-router-dom";

type MoviesBrandProps = {
  name: string;
};

function MoviesBrand({ name }: MoviesBrandProps) {
  return (
    <div className="flex gap-8 items-center">
      <Link to={'/'}>
        <span className="material-symbols-outlined text-emerald-700 text-3xl">
          arrow_back
        </span>
      </Link>
      <span className="text-2xl font-semibold text-gray-500">{name}</span>
    </div>
  );
}

export default MoviesBrand;
