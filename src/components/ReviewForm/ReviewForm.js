import React, { useState } from "react";
import axios from "axios";
import "../ReviewForm/ReviewForm.scss";
import StarRating from "../StarRating/StarRating.js";
import { useNavigate } from "react-router-dom";

function ReviewForm({ onSubmit, bookDetails, authorName, coverUrl, bookId }) {
  const [text, setText] = useState("");
  // const [starRating, setStarRating] = useState(0);
  const [starRating, setStarRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/saved-reviews", {
        bookId: bookId,
        title: bookDetails.title,
        author: authorName,
        text: text,
        rating: starRating,
        coverUrl: coverUrl,
      });

      console.log("Review created successfully:", response.data);

      //Display alert
      window.alert("Review saved successfully!");

      //Redirect to saved entries after alert is closed
      handleRedirect("/saved-reviews");

      //reset form fields
      // setAuthorName("");
      // setBookTitle("");
      setText("");
      setStarRating(0);
    } catch (error) {
      console.error("Error creating review:", error.response.data);
    }
  };

  const handleRedirect = (destination) => {
    navigate(destination);
  };

  // const handleSaveReview = () => {
  //   handleSubmit();
  //   handleRedirect("/saved-reviews");
  // };

  return (
    <div className="review-section">
      <form className="review-section__form" onSubmit={handleSubmit}>
        {/* <input
        type="text"
        placeholder="BookID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      /> */}
        <input
          className="review-section__input"
          type="text"
          placeholder="Book Title"
          value={bookDetails.title}
          readOnly
        />
        <input
          className="review-section__input"
          type="text"
          placeholder="Author Name"
          value={authorName}
          readOnly
        />
        <textarea
          className="review-section__input-review"
          placeholder="Write your review!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* <input
          className="review-section__input"
          type="number"
          placeholder="Rating out of 5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        /> */}
        <StarRating
          className="review-section__star-rating"
          label="Rating out of 5 "
          rating={starRating}
          setRating={setStarRating}
        />
        <div className="review-section__button-wrapper">
          <button className="review-section__button" type="submit">
            Save to Entries
          </button>
          {/* <button
            className="review-section__button"
            type="button"
            onClick={handleSaveReview}
          >
            Save to Entries
          </button>
          <button type="button" onClick={() => handleRedirect("/")}>
            Make Another Review
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
