import React, { useState, useEffect } from 'react';


const VideoPlayer = (props) => {
    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${props.vids}`}>
            </iframe>
        </div>
     );
}
 
export default VideoPlayer;