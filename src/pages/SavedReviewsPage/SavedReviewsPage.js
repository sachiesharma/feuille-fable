import React, { useState, useEffect } from "react";
import axios from "axios";
import "../SavedReviewsPage/SavedReviewsPage.scss";

function SavedReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // is /saved-reviews the correct end point?
        const response = await axios.get("http://localhost:8080/saved-reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews;", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1 className="saved-reviews">My Reviews</h1>
      {reviews.map((review) => (
        <div className="saved-reviews__review-wrapper" key={review.id}>
          {review.coverUrl && (
            <img
              className="saved-reviews__image"
              src={review.coverUrl}
              alt={review.title}
            />
          )}
          <h2>{review.title}</h2>
          <h3>{review.author}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedReviewsPage;
