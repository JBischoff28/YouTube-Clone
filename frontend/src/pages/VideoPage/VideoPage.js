import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Component Imports
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentList from '../../components/CommentList/CommentList';

const VideoPage = () => {

    return ( 
        <div className="container">
            <h1>Watch Me!</h1>
            <CommentList />
            <VideoPlayer />
        </div>
     );
}
 
export default VideoPage;