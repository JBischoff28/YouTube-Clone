import axios from "axios";
import React, { useState, useEffect } from 'react';
import Comment from "../Comment/Comment";

const CommentList = (props) => {

    const [comments, setComments] = useState('');

    useEffect(() => {
        AllComments()
    }, []);

    async function AllComments () {
        const response = await axios.get("http://127.0.0.1:8000/api/comments/all/");
        console.log(response.data);
        setComments(response.data);
    }

    return ( 
        <div>
            <p>{comments.username}</p>
        </div>
     );
}
 
export default CommentList;