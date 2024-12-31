import { Link } from "react-router-dom";

function Brand() {
  return (
    <Link to={"/"}>
      <div className="flex md:px-8">
        <div className="text-5xl font-semibold dark:text-primary-dark text-primary-light font-title-font">
          TMDB
        </div>
        <span className="text-4xl material-symbols-outlined dark:text-primary-dark text-primary-light">
          masked_transitions
        </span>
      </div>
    </Link>
  );
}

export default Brand;
