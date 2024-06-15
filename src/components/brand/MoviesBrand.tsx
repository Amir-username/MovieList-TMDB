import { useNavigate } from "react-router-dom";

type MoviesBrandProps = {
  name: string;
};

function MoviesBrand({ name }: MoviesBrandProps) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-8 items-center">
      <span
        onClick={() => navigate(-1)}
        className="material-symbols-outlined text-emerald-700 dark:text-emerald-500 text-3xl"
      >
        arrow_back
      </span>
      <span className="text-2xl font-semibold text-gray-500 dark:text-gray-400">{name}</span>
    </div>
  );
}

export default MoviesBrand;
