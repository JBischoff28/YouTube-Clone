import axios from "axios";

const Comment = (props) => {

    return ( 
        <div>
            <h3>{props.comments.user.username}</h3>
            <p>{props.comments.text}</p>
        </div>
     );
}
 
export default Comment;