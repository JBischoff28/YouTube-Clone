import { Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = (props) => {

    return ( 
        <div className="resultContainer">
            {props.videos.map((video) => {
                if (video.snippet) {
                    return (
                        <div className="result" key={video.id.videoId}>
                            <Link to={`/video/${video.id.videoId}`}>
                                <div>
                                    <img src={video.snippet.thumbnails.medium.url} alt='video thumbnail'/>
                                    <h3>{video.snippet.title}</h3>
                                </div>
                            </Link>
                        </div>
                    );
                }
            })}
        </div>
     );
}
 
export default SearchResults;