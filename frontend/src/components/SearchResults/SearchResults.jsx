

const SearchResults = (props) => {

    return ( 
        <div>
            {props.videos.map((video, index) => {
                <div key={index}>
                    <img src={video.snippet.thumbnails.medium}/>
                    <p>{video.snippet.title}</p>
                </div>
            })}
        </div>
     );
}
 
export default SearchResults;