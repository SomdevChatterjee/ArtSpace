import { User } from 'firebase/auth';
import React from 'react';
import { Post } from '../../../atoms/PostAtom';

type CommentsProps = {
    user:User;
    selectedPost:Post
};

const Comments:React.FC<CommentsProps> = () => {
    
    return <div>Here are the comments</div>
}
export default Comments;