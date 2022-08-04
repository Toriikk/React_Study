import React from "react";
import Comment from "./Comment";
const comments = [
    {
        name : "김재희",
        comment : "잘 지내고 있니?",
    },
    {
        name : "박현서",
        comment : "화난드아",
    },
];
//JSON 타입 - 댓글 컴포넌트
function CommentList(props) {
    return (
        <div>
        {comments.map((comment) => {
            return (
                <Comment name={comment.name} Comment={comment.comment} />
            );
        })}
        </div>
    );
}

export default CommentList;