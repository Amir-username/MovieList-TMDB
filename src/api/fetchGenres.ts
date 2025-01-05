import axios from "axios";
import { BASE_URL, PUBLIC_TOKEN } from "./urls";

export async function fetchGenres(type: "movie" | "tv") {
  const res = await axios.get(BASE_URL + `genre/${type}/list`, {
    headers: {
      Authorization: `Bearer ${PUBLIC_TOKEN}`,
      Accept: "application/json",
    },
  });
  return res.data.genres;
}

