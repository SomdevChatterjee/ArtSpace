import React from 'react';

type CommentInputProps = {
    commentText:string;
    SetCommentText:(value:string) =>void;
    createLoading:boolean;
    user:Us
    onCreateComment:(comText:string) => void;
};

const CommentInput:React.FC<CommentInputProps> = ({commentText, SetCommentText, createLoading, user}) => {
    
    return <div>Have a good coding</div>
}
export default CommentInput;