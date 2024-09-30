import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { fetchMovieById } from "../../services/api";



import s from './MovieDetailsPage.module.css'


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  
  const location = useLocation();
  const backRef = useRef(location.state)
const [movie, setMovie] = useState("");
  useEffect(() => {
  if (!movieId) return;
        const getMovie = async () => {
            const data = await fetchMovieById(movieId);
            setMovie(data);
        };
        getMovie();
    }, [movieId]);

const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  
  if (!movie) return <h2>Loading...</h2>;
  
  return (

    <div className={s.wrap}>
      <Link to={backRef.current ?? '/movies'}>Back</Link>
      <div className={s.wrapper}>
        <img src={
        movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : defaultImg
      }
        width={250}
        alt="poster" />
      <div >
      <h2>{movie.title} ({movie.release_date ? movie.release_date.split('-')[0] : "0"})</h2>
      
        <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p className={s.overview}>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      </div>
            <hr />
      <div>
        <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to='cast'>Cast</NavLink>
        </li>
        <li>
          <NavLink to='reviews'>Reviews</NavLink>
        </li>
        </ul>
        <hr />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
        
        
      </div>
      
      
      
    </div>
  )
}

export default MovieDetailsPage
