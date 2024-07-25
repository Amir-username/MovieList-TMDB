import { useState } from "react";
import Star from "./Star";

function Rating() {
  const [rate, setRate] = useState<number>(0);
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex justify-center items-center">
        {Array.from({ length: 10 }, (_, i) => {
          return (
            <Star key={i} num={i + 1} full={rate >= i + 1} setRate={setRate} />
          );
        })}
      </div>
      <div className="text-yellow-400 text-2xl mb-0.5 font-semibold">{rate}</div>
    </div>
  );
}

export default Rating;
