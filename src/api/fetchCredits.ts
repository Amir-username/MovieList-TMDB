import axios from "axios";
import { BASE_URL, PUBLIC_TOKEN } from "./urls";

export async function fetchCredits(id: number, type: "movie" | "tv") {
  const res = await axios.get(`${BASE_URL}${type}/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${PUBLIC_TOKEN}`,
      Accept: "application/json",
    },
  });
  const cast = res.data.cast.slice(0, 10);

  return cast;
}
