import React, { useState } from "react";
import axios from "axios";
import "../ReviewForm/ReviewForm.scss";

function ReviewForm() {
  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (event) => {
    event.prevent.Default();
    try {
      const response = await axios.get("/api/reviews", {
        userId,
        bookId,
        text,
        rating,
      });
      console.log("Review created successfully:", response.data);

      //reset form fields
      setUserId("");
      setBookId("");
      setText("");
      setRating("");
    } catch (error) {
      console.error("Error creating review:", error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <textarea
        placeholder="Review text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
