import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviewById } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // if (!movieId) return;
    const getData = async () => {
      const data = await fetchMovieReviewById(movieId);
      setReviews(data);
    }
    getData();
  }, [movieId]);



  if (!reviews?.length) {
    return <h2>We do not have any reviews on this movie</h2>;
  };

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <div>
              {review.author} 
              {review.content}
            </div>
            
          </li>
        )
        )}
      </ul>
    </div>
  )
}

export default MovieReviews
