import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://openlibrary.org/search.json";
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(baseUrl, {
        params: {
          q: query,
        },
      });
      setSearchResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickBook = (result) => {
    console.log("Clicked on book:", result);
    navigate(`/book-review/${result.key}`);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>Search for your book!</h1>
      <p>Search by title, author or ISBN</p>
      <div>
        <SearchForm onSearch={handleSearch} />
        {loading && <p>Loading search results...</p>}
        {!loading &&
          searchResults.map((result) => (
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
