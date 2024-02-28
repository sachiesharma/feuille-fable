import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../../components/StarRating/StarRating";
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
    <div className="saved-reviews">
      <div className="saved-reviews__title"></div>
      <div className="saved-reviews__section-wrapper">
        <h1 className="saved-reviews__section-title">My Reviews</h1>
        {reviews.map((review) => (
          <div className="saved-reviews__review-wrapper" key={review.id}>
            {review.coverUrl && (
              <img
                className="saved-reviews__image"
                src={review.coverUrl}
                alt={review.title}
              />
            )}
            <div className="saved-reviews__title-author-wrapper">
              <h2 className="saved-reviews__book-title">{review.title}</h2>
              <h3 className="saved-reviews__book-author">{review.author}</h3>
            </div>
            <div className="saved-reviews__text-rating-wrapper">
              <p>{review.text}</p>
              <StarRating rating={review.rating} readOnly />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedReviewsPage;
