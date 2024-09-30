import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList"
import SearchBar from "../../components/SearchBar/SearchBar"
import { fetchMovieSearch } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleChangeQuery = newQuery => {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  }
  

  useEffect(() => {
    const getMoviesSearch = async () => {
      const data = await fetchMovieSearch(query);
      setMovies(data.results);
    };
    getMoviesSearch();
  }, [query])
  
  if (!movies) {
    return <h2>Loading...</h2>
  }
  
  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} /> 
      {movies.length > 0 &&
      <MovieList movies={movies} />}
    </div>
  )
}

export default MoviesPage
