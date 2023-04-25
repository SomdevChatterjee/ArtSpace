import { User } from 'firebase/auth';
import React from 'react';

type CommentsProps = {
    user:User;
    selectedPost:
};

const Comments:React.FC<CommentsProps> = () => {
    
    return <div>Here are the comments</div>
}
export default Comments;