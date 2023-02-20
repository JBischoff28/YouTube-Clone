import React, { useState, useEffect } from 'react';

//Component Imports
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoPage = () => {
    return ( 
        <div className="container">
            <h1>Watch Me!</h1>
            <VideoPlayer />
        </div>
     );
}
 
export default VideoPage;