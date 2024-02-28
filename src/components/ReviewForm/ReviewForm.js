import React, { useState } from "react";
import axios from "axios";
import "../ReviewForm/ReviewForm.scss";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";

function ReviewForm({ onSubmit, bookDetails, authorName, coverUrl, bookId }) {
  // const [bookId, setBookId] = useState("");
  // const [bookTitle, setBookTitle] = useState("");
  // const [authorName, setAuthorName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  // const [coverUrl, setCoverUrl] = useState("");

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
        {/* <input
        type="text"
        placeholder="coverUrl"
        value={coverUrl}
        onChange={(e) => setCoverUrl(e.target.value)}
      /> */}
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
