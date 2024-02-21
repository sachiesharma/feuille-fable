import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../BookReviewPage/BookReviewPage.scss";

function BookReviewPage() {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [coverUrl, setCoverUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/works/${bookId}.json`
        );
        console.log(response.data);

        setBookDetails(response.data);

        //choosing the first cover in the response
        const coverId = response.data.covers[0];

        const coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

        setCoverUrl(coverUrl);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);
  console.log(bookId);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Book Review Page</h1>
      {bookDetails && (
        <>
          <h2>{bookDetails.title}</h2>
          <h4>{bookDetails.author_name}</h4>
          <img
            src={coverUrl}
            alt={bookDetails.title}
            onClick={() => window.open(coverUrl, "_blank")}
          />
        </>
      )}
    </div>
  );
}

export default BookReviewPage;
