import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjUxZGU5ZmZkMTdmNDdlNDAxMzMwNTdkZGIxZGZiMCIsIm5iZiI6MTcyNzM1NDk3NS45NjE2ODcsInN1YiI6IjY2ZjUxMWE2Mzg5NDJhYjg5MGVkNDAxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVa67u3_butVhX-dunoWxa9ZMSpbNmsp0eb0A4MShw0";

export const fetchMoviesPop = async () => {
  const { data } = await axios.get("trending/movie/day");
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const fetchMovieSearch = async (query) => {
  const { data } = await axios.get(`search/movie`, {
    params: { query },
  });
  return data;
};

export const fetchMovieCreditById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviewById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data.results;
};
