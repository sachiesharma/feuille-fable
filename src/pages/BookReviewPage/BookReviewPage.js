import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../BookReviewPage/BookReviewPage.scss";

function BookReviewPage({ book }) {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org${bookId}.json`
        );
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Book Review Page</h1>
      <p>Book ID: {bookId}</p>
      {bookDetails && (
        <>
          <h2>{bookDetails.title}</h2>
          <h4>{bookDetails.author_name}</h4>
        </>
      )}
      <h2>{book.title}</h2>
    </div>
  );
}

export default BookReviewPage;
