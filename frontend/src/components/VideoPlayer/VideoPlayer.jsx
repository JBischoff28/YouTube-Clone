
const VideoPlayer = (props) => {
    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${props.videoId}`} allowFullScreen="True">
            </iframe>
        </div>
     );
}
 
export default VideoPlayer;