import React, { useState, useEffect } from 'react';


const VideoPlayer = (props) => {
    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${props.videos.videoId}`}>
            </iframe>
        </div>
     );
}
 
export default VideoPlayer;