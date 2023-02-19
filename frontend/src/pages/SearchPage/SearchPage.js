import React, { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey.js"

//Component Imports
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

const SearchPage = () => {

  const [videos, setVideos] = useState([]);

  async function fetchVideos () {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&type=video&maxResults=6`);
      setVideos(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="container">
      <SearchBar />
    </div>
  );
};

export default SearchPage;
