import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StarRating from "../../components/StarRating/StarRating";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../SavedReviewsPage/SavedReviewsPage.scss";
import loaderLogo from "../../assets/images/loader.svg";
import defaultImage from "../../assets/images/cover_not_found.jpg";

// Dates arrive as ISO strings; build the Date from parts so the displayed
// day never shifts across timezones.
const formatDate = (value) => {
  if (!value) return null;
  const [year, month, day] = value.slice(0, 10).split("-");
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

function SavedReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [editForm, setEditForm] = useState({
    text: "",
    rating: 0,
    date_started: "",
    date_finished: "",
  });

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

  const startEditing = (review) => {
    setEditingId(review.id);
    setEditForm({
      text: review.text,
      rating: review.rating,
      date_started: review.date_started ? review.date_started.slice(0, 10) : "",
      date_finished: review.date_finished
        ? review.date_finished.slice(0, 10)
        : "",
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const handleSave = async (id) => {
    setSaving(true);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/saved-reviews/${id}`,
        {
          text: editForm.text,
          rating: editForm.rating,
          date_started: editForm.date_started || null,
          date_finished: editForm.date_finished || null,
        },
      );
      setReviews(
        reviews.map((review) => (review.id === id ? response.data : review)),
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating review:", error);
      window.alert("Couldn't save your changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (review) => {
    if (!window.confirm(`Delete your entry for "${review.title}"?`)) {
      return;
    }
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/saved-reviews/${review.id}`,
      );
      setReviews(reviews.filter((item) => item.id !== review.id));
    } catch (error) {
      console.error("Error deleting review:", error);
      window.alert("Couldn't delete the entry. Please try again.");
    }
  };

  const renderDates = (review) => {
    const started = formatDate(review.date_started);
    const finished = formatDate(review.date_finished);
    if (!started && !finished) return null;
    return (
      <p className="saved-reviews__dates">
        {started && `Started ${started}`}
        {started && finished && " · "}
        {finished && `Finished ${finished}`}
      </p>
    );
  };

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
              <div className="saved-reviews__actions">
                {editingId !== review.id && (
                  <>
                    <button
                      className="saved-reviews__action-button"
                      type="button"
                      title="Edit entry"
                      aria-label={`Edit your entry for ${review.title}`}
                      onClick={() => startEditing(review)}
                    >
                      <EditOutlinedIcon fontSize="inherit" />
                    </button>
                    <button
                      className="saved-reviews__action-button saved-reviews__action-button--danger"
                      type="button"
                      title="Delete entry"
                      aria-label={`Delete your entry for ${review.title}`}
                      onClick={() => handleDelete(review)}
                    >
                      <DeleteOutlineIcon fontSize="inherit" />
                    </button>
                  </>
                )}
              </div>
              {review.coverUrl && (
                <img
                  className="saved-reviews__image"
                  src={review.coverUrl}
                  alt={review.title}
                  onError={(event) => {
                    event.target.onerror = null;
                    event.target.src = defaultImage;
                  }}
                />
              )}
              <div className="saved-reviews__title-author-wrapper">
                <h2 className="saved-reviews__book-title">{review.title}</h2>
                <h3 className="saved-reviews__book-author">{review.author}</h3>
              </div>
              <div className="saved-reviews__text-rating-wrapper">
                {editingId === review.id ? (
                  <div className="saved-reviews__edit-form">
                    <textarea
                      className="saved-reviews__edit-textarea"
                      value={editForm.text}
                      onChange={(e) =>
                        setEditForm({ ...editForm, text: e.target.value })
                      }
                    />
                    <div className="saved-reviews__edit-date-row">
                      <label className="saved-reviews__edit-date-field">
                        <span className="saved-reviews__edit-date-label">
                          Started reading
                        </span>
                        <input
                          className="saved-reviews__edit-date-input"
                          type="date"
                          value={editForm.date_started}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              date_started: e.target.value,
                            })
                          }
                        />
                      </label>
                      <label className="saved-reviews__edit-date-field">
                        <span className="saved-reviews__edit-date-label">
                          Finished reading
                        </span>
                        <input
                          className="saved-reviews__edit-date-input"
                          type="date"
                          value={editForm.date_finished}
                          min={editForm.date_started || undefined}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              date_finished: e.target.value,
                            })
                          }
                        />
                      </label>
                    </div>
                    <StarRating
                      label="Rating out of 5 "
                      rating={editForm.rating}
                      setRating={(value) =>
                        setEditForm({ ...editForm, rating: value })
                      }
                    />
                    <div className="saved-reviews__edit-buttons">
                      <button
                        className="saved-reviews__save-button"
                        type="button"
                        disabled={saving}
                        onClick={() => handleSave(review.id)}
                      >
                        {saving ? "Saving..." : "Save"}
                      </button>
                      <button
                        className="saved-reviews__cancel-button"
                        type="button"
                        onClick={cancelEditing}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {renderDates(review)}
                    <p>{review.text}</p>
                    <StarRating rating={review.rating} readOnly />
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SavedReviewsPage;
