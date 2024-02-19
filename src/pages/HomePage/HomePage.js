import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const baseUrl = "https://openlibrary.org/search.json";

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

  return (
    <div>
      <h1>Search for your book!</h1>
      <div>
        <SearchForm onSearch={handleSearch} />
        {searchResults.map((result) => (
          <div key={result.key}>
            <h2>{result.title}</h2>
            {/* Display other relevant information */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
