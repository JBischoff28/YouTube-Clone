import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchPage = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("");
        setVideos(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
  }, [])

  return (
    <div className="container">
      <h1></h1>
    </div>
  );
};

export default SearchPage;
