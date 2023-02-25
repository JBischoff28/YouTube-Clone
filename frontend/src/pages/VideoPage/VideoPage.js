import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

//Component Imports
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentList from '../../components/CommentList/CommentList';

const VideoPage = () => {

    const { videoId } = useParams();

    return ( 
        <div className="container">
            <h1>Watch Me!</h1>
            <CommentList />
            <VideoPlayer videoId={videoId}/>
        </div>
     );
}
 
export default VideoPage;