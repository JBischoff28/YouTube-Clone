import React, { useState, useEffect } from 'react';


const VideoPlayer = (props) => {
    return ( 
        <iframe src={`https://www.youtube.com/embed/${props.videos.videoId}`}>
        </iframe>
     );
}
 
export default VideoPlayer;