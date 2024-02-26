import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../BookReviewPage/BookReviewPage.scss";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

function BookReviewPage() {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [coverUrl, setCoverUrl] = useState("");
  const [authorName, setAuthorName] = useState("");
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

        //Fetch author details
        const authorKey = response.data.authors[0]?.author?.key;
        if (authorKey) {
          const authorResponse = await axios.get(
            `https://openlibrary.org${authorKey}.json`
          );
          console.log("Author data:", authorResponse.data);
          setAuthorName(authorResponse.data.name);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [bookId]);
  console.log(bookId);

  const handleReviewSubmit = async (reviewData) => {
    try {
      // const response = await axios.post("/saved-reviews", reviewData);
      // console.log("Review created successfully!:", response.data);
      console.log("Review data to submit:", reviewData);
    } catch (error) {
      console.error("Error submitting review:", error);
      // console.error("Error creating review:", error.response.data.error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bookreview">
      <div>
        <h1 className="bookreview__title">Make an entry for this book!</h1>
        <div className="bookreview__wrapper">
          {bookDetails && (
            <div className="bookreview__img-details-wrapper">
              <img
                src={coverUrl}
                alt={bookDetails.title}
                onClick={() => window.open(coverUrl, "_blank")}
              />
              <div className="bookreview__book-details">
                <h2>{bookDetails.title}</h2>
                <h4>{authorName}</h4>
              </div>

              {/* supposed to autopopulate with the below code but doesn't work */}
              {/* <h2>{bookDetails.title}</h2>
          <h4>{bookDetails.authors?.[0]?.author?.name}</h4>
          {bookDetails.covers && (
            <img
              src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-M.jpg`}
              alt={bookDetails.title} */}
            </div>
          )}
          <div className="bookreview__form">
            <ReviewForm
              onSubmit={handleReviewSubmit}
              bookDetails={bookDetails}
              authorName={authorName}
              coverUrl={coverUrl}
              bookId={bookId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookReviewPage;
