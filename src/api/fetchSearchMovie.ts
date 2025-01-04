import { BASE_URL, PUBLIC_TOKEN } from "./urls";

export async function fetchSearchMovie(
  query: string,
  type: "movie" | "tv",
  signal?: AbortSignal,
  page: number = 1
) {
  const response = await fetch(BASE_URL + `search/${type}?query=${query}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${PUBLIC_TOKEN}`,
      Accept: "application/json",
    },
    signal: signal,
  });

  const data = await response.json();
  return data.results;
}
