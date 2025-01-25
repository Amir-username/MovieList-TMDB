import { Link } from "react-router-dom";
import { Genre } from "../../models/Genre";

type GenreItemProps = {
  genre: Genre;
  title: string;
  backDrop: string;
};

function GenreItem({ genre, title, backDrop }: GenreItemProps) {
  return (
    <Link
      to={"../genre/"}
      state={{
        genre,
        title,
      }}
    >
      <div className="relative w-full rounded-lg h-28 md:w-96 md:h-full">
        <img src={backDrop} alt="genre poster" className="rounded-lg brightness-[30%]" />
        <div className="absolute flex items-center justify-center w-full h-52 top-1 left-1">
          <span className="absolute text-3xl text-white font-main-font">
            {genre.name}
          </span>
        </div>
      </div>
      {/* <div
        className={`flex w-40 h-28 md:w-64 md:h-44 rounded-lg p-5 ${color} items-center justify-center`}
      >
        <span className="text-xl text-white font-main-font">{genre.name}</span>
      </div> */}
    </Link>
  );
}

export default GenreItem;

// https://image.tmdb.org/t/p/w500//by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg action
// https://image.tmdb.org/t/p/w500//b3mdmjYTEL70j7nuXATUAD9qgu4.jpg adventure
// https://image.tmdb.org/t/p/w500//vYqt6kb4lcF8wwqsMMaULkP9OEn.jpg animation
// https://image.tmdb.org/t/p/w500//fViElUGfdoZjtnVxvSpJX8TwxY6.jpg comedy
// https://image.tmdb.org/t/p/w500//9Qq8InnodUYs8zdam8Zj967i6RO.jpg crime
// https://image.tmdb.org/t/p/w500//721p2lNSGp2iSlUUukZwCzEKrnn.jpg doc
// https://image.tmdb.org/t/p/w500//nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg drama
// https://image.tmdb.org/t/p/w500//9mJ9dxCGpudxyBtlC0M9Y4pTyXN.jpg family
// https://image.tmdb.org/t/p/w500//uKb22E0nlzr914bA9KyA5CVCOlV.jpg fantasy
// https://image.tmdb.org/t/p/w500//8dR0DXJ24BwWXRuMrFH1hbVLC5X.jpg history
// https://image.tmdb.org/t/p/w500//fYnEbgoNCxW9kL0IgOgtJb9JTBU.jpg horror
// https://image.tmdb.org/t/p/w500//bF8eIIIJJoMZf2mFibAejqEGQcX.jpg music
// https://image.tmdb.org/t/p/w500//1fYIvYIwAWID27ZsmpOzAcEDOCv.jpg mystery
// https://image.tmdb.org/t/p/w500//4cp40IyTpFfsT2IKpl0YlUkMBIR.jpg romance
// https://image.tmdb.org/t/p/w500//9REO1DLpmwhrBJY3mYW5eVxkXFM.jpg science
// https://image.tmdb.org/t/p/w500//1qSo3zT9XAQYcbZaLBn46mTeTHZ.jpg tv movie
// https://image.tmdb.org/t/p/w500//3m0j3hCS8kMAaP9El6Vy5Lqnyft.jpg thriller
// https://image.tmdb.org/t/p/w500//1uKHoFWyYJn060dpIXUCU7Wbc15.jpg war
// https://image.tmdb.org/t/p/w500//7gfDVfaw0VaIkUGiEH13o3TIC7A.jpg western
