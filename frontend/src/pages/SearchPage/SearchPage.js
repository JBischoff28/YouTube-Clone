import React, { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey.js";
import { KEY2 } from "../../localKey.js";
import "./SearchPage.css";

//Component Imports
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchResults from "../../components/SearchResults/SearchResults.jsx";

const SearchPage = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos () {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY2}&part=snippet&type=video&maxResults=6`);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <SearchBar setVideos={setVideos} />
      </div>
      <div className="resultsContainer">
        <SearchResults videos={videos} />
      </div>
    </div>
  );
};

export default SearchPage;
