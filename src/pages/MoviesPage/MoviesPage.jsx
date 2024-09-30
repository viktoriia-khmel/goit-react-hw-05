import { useState, useMemo, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList"
import SearchBar from "../../components/SearchBar/SearchBar"
import { fetchMovieSearch } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const handleChangeQuery = newQuery => {
        setQuery(newQuery);
  }
  

  useEffect(() => {
    const getMoviesSearch = async () => {
      const data = await fetchMovieSearch();
      setMovies(data);
    };
    getMoviesSearch();
  })
  
  
  // const FilteredMovies = useMemo(
  //   () =>
  //     movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase())), [query, movies]);
  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} /> 
      {movies.length > 0 &&
      <MovieList movies={movies} />}
    </div>
  )
}

export default MoviesPage
