import React, { useState } from "react";
import axios from "axios";
import "../ReviewForm/ReviewForm.scss";
import StarRating from "../StarRating/StarRating.js";

function ReviewForm({ onSubmit, bookDetails, authorName, coverUrl, bookId }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/saved-reviews", {
        bookId: bookId,
        title: bookDetails.title,
        author: authorName,
        text: text,
        rating: rating,
        coverUrl: coverUrl,
      });

      console.log("Review created successfully:", response.data);

      //reset form fields
      // setAuthorName("");
      // setBookTitle("");
      setText("");
      setRating("");
    } catch (error) {
      console.error("Error creating review:", error.response.data);
    }
  };

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
        <input
          className="review-section__input"
          type="number"
          placeholder="Rating out of 5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <StarRating
          label="Rating out of 5"
          rating={rating}
          setRating={setRating}
        />
        <div>
          <button className="review-section__button" type="submit">
            Save Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
