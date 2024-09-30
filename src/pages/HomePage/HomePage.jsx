import { useState, useEffect } from "react";

import MovieList from "../../components/MovieList/MovieList"
import { fetchMoviesPop } from "../../services/api";

const HomePage = () => {

const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getMoviesPop = async () => {
            const data = await fetchMoviesPop();
            setMovies(data);
        };
        getMoviesPop();
    }, []);
        

  return (
    <div>
      {<MovieList movies={movies } />}
    </div>
  )
}

export default HomePage
