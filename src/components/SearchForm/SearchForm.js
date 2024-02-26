import React from "react";
import "../SearchForm/SearchForm.scss";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__input-wrapper">
        <input
          className="search__input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, author or ISBN"
        />
      </div>
      <div className="search__button-wrapper">
        <button className="search__button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
