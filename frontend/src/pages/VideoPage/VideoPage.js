import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

//API Keys
import { KEY } from "../../localKey.js";
import { KEY2 } from "../../localKey.js";

//Component Imports
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentList from '../../components/CommentList/CommentList';
import SearchResults from '../../components/SearchResults/SearchResults.jsx';
import useAuth from '../../hooks/useAuth.js';

const VideoPage = (props) => {

    const { videoId, video } = useParams();
    const [user, token] = useAuth();
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [currentVideo, setCurrentVideo] = useState([]);

    useEffect(() => {
        GetCurrentVideo();
        GetRelatedVideos();
    }, []);

    useEffect(() => {
        AllComments();
    }, [token]);

    async function GetCurrentVideo () {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY2}&part=snippet&type=video&maxResults=1`);
            console.log(response.data.items);
            setCurrentVideo(response.data.items);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function AllComments () {
        const response = await axios.get("http://127.0.0.1:8000/api/comments/all/");
        console.log(response.data);
        setComments(response.data);
        filterComments();
    }

    async function GetRelatedVideos() {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&key=${KEY2}&relatedToVideoId=${videoId}`);
            console.log(response.data.items);
            setRelatedVideos(response.data.items);
        } catch (error) {
            console.log(error.message);
        }
    }

    function filterComments() {
        let videoComments = comments.filter((el) => {
            if (el.video_id === videoId) {
                return true;
            }
            else {
                return false;
            }
        });
        setComments(videoComments);
    }

    return ( 
        <div className="container">
            <div>
                <CommentList comments={comments}/>
            </div>
            <div className='videoPlayer'>
                <VideoPlayer videoId={videoId} />
            </div>
            <div>
                <ul>
                    <li><h3>Title</h3></li>
                    <li>
                        <div>
                            {currentVideo.map((video, index) => {
                                if (video.snippet) {
                                    return (
                                        <div key={index}>
                                            <p>{video.snippet.title}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </li>
                    <li><h3>Description</h3></li>
                    <li>
                        <div>
                            {currentVideo.map((video, index) => {
                                if (video.snippet) {
                                    return (
                                        <div key={index}>
                                            <p>{video.snippet.description}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </li>
                </ul>
            </div>
            <div className='relatedResults'>
                <SearchResults videos={relatedVideos} />
            </div>
        </div>
     );
}
 
export default VideoPage;