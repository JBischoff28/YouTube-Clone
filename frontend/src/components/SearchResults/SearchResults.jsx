

const SearchResults = (props) => {

    function loadComponents() {
        if (!props.videos[0]){
            {}
        }
        else {
            <div>
                {props.videos.map((video, index) => {
                    <div key={index}>
                        <img src={video.snippet.thumbnails.medium}/>
                        <p>{video.snippet.title}</p>
                    </div>
                })}
            </div>
        }
    }

    return ( 
        [loadComponents()]
     );
}
 
export default SearchResults;