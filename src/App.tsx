import axios from "axios";

import { useEffect, useState } from "react";
import { BaseURL, ImageUrl, options } from "./requestConfig";


function App() {
  const [poster, setPoster] = useState<string>("");

  useEffect(() => {
    axios.get(BaseURL, options).then((res) => {
      const poster = res!.data.results[6].poster_path;
      setPoster(poster);
    });
  }, []);

  return (
    <>
      <div>
        <img
          src={ImageUrl + poster}
          alt=""
          className="w-40 h-40"
        />
      </div>
    </>
  );
}

export default App;
