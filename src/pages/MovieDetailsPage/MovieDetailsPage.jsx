import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchMovieById } from "../../services/api";


const MovieDetailsPage = () => {
    const params = useParams();
     console.log(params);
// const [movie, setMovie] = useState(null);
// useEffect(() => {
//         const getMovie = async () => {
//             const data = await fetchMovieById(movieId);
//             setMovie(data);
//         };
//         getMovie();
//     }, [movieId]);


    
   

  return (
    <div>
      <h2>details</h2>
    </div>
  )
}

export default MovieDetailsPage
