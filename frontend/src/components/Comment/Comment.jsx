import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {

    const [user, token] = useAuth();

    return ( 
        <div>
          <h4>{user.username}</h4>
          <p>{props.comment.text}</p>
        </div>
     );
}
 
export default Comment;