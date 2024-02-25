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
      <h1>My Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.bookTitle}</h2>
          <h3>{review.authorName}</h3>
          <p>{review.text}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedReviewsPage;
