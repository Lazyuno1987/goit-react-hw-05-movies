import { MovieReviewsFetch } from '../servises/Servises';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = id => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    MovieReviewsFetch(movieId).then(setReview);
  }, [movieId]);

  if (review.length === 0) {
    return <h2>There is no reviews</h2>;
  } else {
    return (
      <ul>
        {review &&
          review.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    );
  }
};
