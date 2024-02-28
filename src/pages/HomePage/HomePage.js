import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";
import "../HomePage/HomePage.scss";
import defaultImage from "../../assets/images/cover_not_found.jpg";

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
      <div className="home-search__results-container">
        {!loading &&
          searchResults.map((result) => (
            <div
              className="home-search__results-wrapper"
              key={result.key}
              onClick={() => handleClickBook(result)}
            >
              <div className="home-search__results-content">
                {result.cover_i ? ( // Check if cover ID exists
                  <img
                    className="home-search__coverUrl"
                    src={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}
                    alt={result.title}
                  />
                ) : (
                  <img
                    className="home-search__coverUrl"
                    src={defaultImage}
                    alt="cover not found"
                  />
                )}
                <h2 className="home-search__book-title">{result.title}</h2>
                <h4>{result.author_name}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
