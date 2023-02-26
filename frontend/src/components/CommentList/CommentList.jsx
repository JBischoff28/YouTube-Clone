import React, { useState, useEffect } from 'react';
import Comment from "../Comment/Comment";

const CommentList = (props) => {

    return (
        <div>
            {props.comments.map((comment, index) => {
                if (comment.data) {
                    return (
                        <div key={index}>
                            <Comment comments={props.comments}/>
                        </div>
                    );
                }
            })}
        </div>
     );
}
 
export default CommentList;