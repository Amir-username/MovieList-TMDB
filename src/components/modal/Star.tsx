import FullStar from "../../assets/svg/FullStar.svg";
import EmptyStar from "../../assets/svg/EmptyStar.svg";


type StarProps = {
    num: number,
    full: boolean,
    setRate: React.Dispatch<React.SetStateAction<number>>,
}

function Star({num, full, setRate}: StarProps) {

  const onTap = () => setRate(num);
  return (
    <div onClick={onTap}>
      {full ? (
        <img src={FullStar} alt="star" className="w-8 h-8 cursor-pointer" />
      ) : (
        <img src={EmptyStar} alt="star" className="w-8 h-8 cursor-pointer" />
      )}
    </div>
  );
}

export default Star;
