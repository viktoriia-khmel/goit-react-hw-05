import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjUxZGU5ZmZkMTdmNDdlNDAxMzMwNTdkZGIxZGZiMCIsIm5iZiI6MTcyNzM1NDk3NS45NjE2ODcsInN1YiI6IjY2ZjUxMWE2Mzg5NDJhYjg5MGVkNDAxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVa67u3_butVhX-dunoWxa9ZMSpbNmsp0eb0A4MShw0",
  },
};

export const fetchMoviesPop = async () => {
  const { data } = await axios.get("trending/movie/day", options);
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`, options);
  return data;
};

export const fetchMovieSearch = async (query) => {
  const { data } = await axios.get(`search/movie?query=${query}`, options);
  return data;
};

export const fetchMovieCreditById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast;
};

export const fetchMovieReviewById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, options);
  return data.cast;
};
