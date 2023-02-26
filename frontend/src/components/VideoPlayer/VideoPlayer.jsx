import "./VideoPlayer.css";

const VideoPlayer = (props) => {
    return (
        <iframe src={`https://www.youtube.com/embed/${props.videoId}`} allowFullScreen="True">
        </iframe>
     );
}
 
export default VideoPlayer;