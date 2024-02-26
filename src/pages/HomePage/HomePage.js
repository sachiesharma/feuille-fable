import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";
import "../HomePage/HomePage.scss";

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
    navigate(`/book-review${result.key}`);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="home-search">
      <div className="home-search__wrapper"></div>
      <h1 className="home-search__subtitle">Search for your book!</h1>

      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading search results...</p>}
      {!loading &&
        searchResults.map((result) => (
          <div key={result.key} onClick={() => handleClickBook(result)}>
            <h2>{result.title}</h2>
            <h4>{result.author_name}</h4>
            {result.cover_i && ( // Check if cover ID exists
              <img
                src={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}
                alt={result.title}
              />
            )}
          </div>
        ))}
    </div>
  );
}

export default HomePage;
