import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieCreditById } from "../../services/api";
import s from './MovieCast.module.css'


const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await fetchMovieCreditById(movieId);
      setActors(data);
    }
    getData();
  }, [movieId]);

const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (!actors.length) {
  return <h2>Loading...</h2>
}

  return (
    <div>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <div className={s.actor_wrap}>
              <img src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
                width={250}
                alt={actor.name} />
              <div className={s.title_wrap}>
                <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
              </div>
            
            </div>
            
          </li>
        )
        )}
      </ul> 
    </div>
  )
}

export default MovieCast
