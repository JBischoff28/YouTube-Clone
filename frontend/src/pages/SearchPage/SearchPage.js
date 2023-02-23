import React, { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey.js";
import { KEY2 } from "../../localKey.js";

//Component Imports
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchResults from "../../components/SearchResults/SearchResults.jsx";

const SearchPage = () => {

  const [videos, setVideos] = useState([]);

  function test (){
    console.log(videos);
  }

  async function fetchVideos () {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&type=video&maxResults=6`);
      setVideos(response.data.items);
      test();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <SearchBar setVideos={setVideos} test={test}/>
      <SearchResults videos={videos}/>
    </div>
  );
};

export default SearchPage;
