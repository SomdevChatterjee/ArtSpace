import React from 'react';
import { Post } from '../../atoms/PostAtom';

type PostItemProps = {
    post:Post;
    userIsCreator:Boo
};

const PostItem:React.FC<PostItemProps> = () => {
    
    return <div>Have a good coding</div>
}
export default PostItem;