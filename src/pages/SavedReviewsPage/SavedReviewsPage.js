import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StarRating from "../../components/StarRating/StarRating";
import "../SavedReviewsPage/SavedReviewsPage.scss";
import loaderLogo from "../../assets/images/loader.svg";

function SavedReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/saved-reviews`,
      );
      setReviews(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // The API responds 404 when there are no reviews yet — not a failure
        setReviews([]);
      } else {
        console.error("Error fetching reviews;", error);
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="saved-reviews">
      <div className="saved-reviews__title"></div>
      <div className="saved-reviews__section-wrapper">
        <div className="saved-reviews__section-title-wrapper">
          <h1 className="saved-reviews__section-title">My Reviews</h1>
        </div>
        {loading && (
          <div className="saved-reviews__status">
            <img
              className="saved-reviews__loader"
              src={loaderLogo}
              alt="Loading..."
            />
            <p className="saved-reviews__status-text">
              Fetching your entries — this can take up to a minute if the
              library is waking up.
            </p>
          </div>
        )}
        {!loading && error && (
          <div className="saved-reviews__status">
            <p className="saved-reviews__status-text">
              Couldn't reach your entries. The server may still be waking up.
            </p>
            <button
              className="saved-reviews__retry-button"
              type="button"
              onClick={fetchReviews}
            >
              Try Again
            </button>
          </div>
        )}
        {!loading && !error && reviews.length === 0 && (
          <div className="saved-reviews__status">
            <p className="saved-reviews__status-text">
              No entries yet — your shelf is waiting for its first story.
            </p>
            <Link className="saved-reviews__empty-link" to="/">
              Find a book to review
            </Link>
          </div>
        )}
        {!loading &&
          !error &&
          reviews.map((review) => (
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
