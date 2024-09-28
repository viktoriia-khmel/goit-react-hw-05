import { useEffect, useState } from "react"
import { fetchMoviesPop } from "../../services/api";
import { Link } from "react-router-dom";


const MoviesPop = () => {
    const [moviesPop, setMoviesPop] = useState([]);
    useEffect(() => {
        const getMoviesPop = async () => {
            const data = await fetchMoviesPop();
            setMoviesPop(data.results);
        };
        getMoviesPop();
    }, []);
        
    
  return (
    <div>
      <h2>Movies toplist</h2>
          <ul>
              {moviesPop.map(movie => (
                  <li key={movie.id}>
                      <Link to={movie.id.toString()}>
                          <p>{movie.title}</p>
                          </Link>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default MoviesPop
