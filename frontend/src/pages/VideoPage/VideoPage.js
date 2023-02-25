import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

//API Keys
import { KEY } from "../../localKey.js";
import { KEY2 } from "../../localKey.js";

//Component Imports
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentList from '../../components/CommentList/CommentList';

const VideoPage = () => {

    const { videoId } = useParams();
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        //GetRelatedVideos();
    }, []);

    async function GetRelatedVideos() {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&key=${KEY}}&relatedToVideoId=${videoId}`);
            console.log(response.data.items);
            setRelatedVideos(response.data.items);
        } catch (error) {
            console.log(error.message);
        }
    }

    return ( 
        <div className="container">
            <CommentList />
            <VideoPlayer videoId={videoId} />
        </div>
     );
}
 
export default VideoPage;