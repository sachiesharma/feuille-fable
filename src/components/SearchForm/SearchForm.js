import React from "react";
import "../SearchForm/SearchForm.scss";
import { useState } from "react";

function SearchForm({ onSearch }) {
  // const handleSearch = (query) => {};
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
      />
      <h1>HELLO</h1>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
