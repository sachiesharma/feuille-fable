import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import BookReviewPage from "./pages/BookReviewPage/BookReviewPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-review/:bookId" element={<BookReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
