import React, { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey.js";
import { KEY2 } from "../../localKey.js";

//Component Imports
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";

const SearchPage = () => {

  const [videos, setVideos] = useState([]);

  async function searchVideos (search) {
    try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY2}&part=snippet&type=video&maxResults=6`);
        console.log(response.data);
        setVideos(response.data);
    } catch (error) {
        console.log(error.message);
    }
  }

  async function fetchVideos () {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY2}&part=snippet&type=video&maxResults=6`);
      setVideos(response.data)
      console.log(videos);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="container">
      <SearchBar searchVideos={searchVideos}/>
      <div className="videoTray">
        <VideoPlayer videos={videos}/>
        <VideoPlayer videos={videos}/>
        <VideoPlayer videos={videos}/>
        <VideoPlayer videos={videos}/>
        <VideoPlayer videos={videos}/>
        <VideoPlayer videos={videos}/>
      </div>
    </div>
  );
};

export default SearchPage;
