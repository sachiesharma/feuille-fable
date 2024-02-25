import React, { useState } from "react";
import axios from "axios";
import "../ReviewForm/ReviewForm.scss";

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
    <form className="review-form" onSubmit={handleSubmit}>
      {/* <input
        type="text"
        placeholder="BookID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      /> */}
      <input
        type="text"
        placeholder="Book Title"
        value={bookDetails.title}
        readOnly
      />
      <input
        type="text"
        placeholder="Author Name"
        value={authorName}
        readOnly
      />
      <textarea
        placeholder="Write your review!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
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
      <button type="submit">Save Review</button>
    </form>
  );
}

export default ReviewForm;
