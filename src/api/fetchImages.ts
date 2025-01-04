import axios from "axios";
import { BASE_URL, PUBLIC_TOKEN } from "./urls";

export async function fetchMovieImages(id: number, type: 'movie' | 'tv') {
  const res = await axios.get(`${BASE_URL}${type}/${id}/images`, {
    headers: {
      Authorization: `Bearer ${PUBLIC_TOKEN}`,
      Accept: "application/json",
    },
  });
  const images = res.data.backdrops.slice(0, 10)

  return images;
}
