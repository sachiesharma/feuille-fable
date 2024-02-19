import React from "react";

function BookReviewPage({ book }) {
  return (
    <div>
      <h1>Book Review</h1>
      <h2>{book.title}</h2>
    </div>
  );
}

export default BookReviewPage;
