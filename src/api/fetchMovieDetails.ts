import axios from "axios";
import { BASE_URL, PUBLIC_TOKEN } from "./urls";

export async function fetchMovieDetails(url: string) {
  const res = await axios.get(BASE_URL + url, {
    headers: {
      Authorization: `Bearer ${PUBLIC_TOKEN}`,
      Accept: "application/json",
    },
  });
  return res.data;
}
