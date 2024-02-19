import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const baseUrl = "https://openlibrary.org/search.json";
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: query,
        },
      });
      setSearchResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClickBook = (result) => {
    console.log("Clicked on book:", result);
    navigate(`/book-review${result.key}`);
  };

  return (
    <div>
      <h1>Search for your book!</h1>
      <div>
        <SearchForm onSearch={handleSearch} />
        {searchResults.map((result) => (
          <div key={result.key} onClick={() => handleClickBook(result)}>
            <h2>{result.title}</h2>
            <h4>{result.author_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
