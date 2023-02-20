import React, { useState, useEffect } from 'react';


const VideoPlayer = (props) => {
    return (
        <div>
            <iframe key={index} src={`https://www.youtube.com/embed/${video.videoId}`}>
            </iframe>
        </div>
     );
}
 
export default VideoPlayer;