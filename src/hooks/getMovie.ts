import { MoviesNowPlaying, MoviesTopPicks } from "@/constants";

export const getMovie = (movietitle: string) => {
  const movies = [...MoviesNowPlaying, ...MoviesTopPicks];

  const movie = movies.find((m) => m.value === movietitle);

  return movie;
};
