
import { Link } from "react-router-dom";


const MovieList = ({movies, FilteredMovies, movieId, query}) => {
    
        
    
  return (
    <div>
      <h2>Movies toplist</h2>
          <ul>
              {movies.map(movie => (
                  <li key={movie.id}>
                      <Link to={`movies/${movie.id}`}>
                          <p>{movie.title}</p>
                          </Link>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default MovieList
