import React from 'react';

type CommentInputProps = {
    commentText:string;
    SetCommentText:(value:string) =>void;
    createLoading:boolean;
    onCreateComment:(commment) => {}
};

const CommentInput:React.FC<CommentInputProps> = () => {
    
    return <div>Have a good coding</div>
}
export default CommentInput;