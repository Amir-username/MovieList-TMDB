import { useLocation, useNavigate } from "react-router-dom";
import { Cast } from "../../models/Cast";
import { useEffect, useState } from "react";
import { Credit } from "../../models/Credit";
import axios from "axios";
import { BaseURL, options } from "../../requestConfig";
import CreditInfo from "./CreditInfo";
import { Movie } from "../../models/Movie";
import CreditMovieCarousel from "./CreditMovieCarousel";

function CreditDetails() {
  const [credit, setCredit] = useState<Credit>();
  const [creditMovies, setCreditMovies] = useState<Movie[]>([])

  const location = useLocation();
  const cast: Cast = location.state;

  useEffect(() => {
    const fetchCredit = async () => {
      const res = await axios.get(BaseURL + `/person/${cast.id}`, options);
      const data = await res.data;
      setCredit(data);
    };

    fetchCredit();
  }, []);


  useEffect(() => {
    const fetchCredit = async () => {
      const res = await axios.get(BaseURL + `/person/${cast.id}/movie_credits`, options);
      const data = await res.data;
      setCreditMovies(data.cast);
    };

    fetchCredit();
  }, []);

  const navigate = useNavigate();

  if (credit) {
    return (
      <div className="flex flex-col p-3 gap-5 mb-20 md:px-32">
        <span
          onClick={() => navigate(-1)}
          className="material-symbols-outlined text-amber-700 dark:text-amber-500 text-3xl"
        >
          arrow_back
        </span>
        <CreditInfo credit={credit} />
        <CreditMovieCarousel movies={creditMovies} />
      </div>
    );
  }
}

export default CreditDetails;
