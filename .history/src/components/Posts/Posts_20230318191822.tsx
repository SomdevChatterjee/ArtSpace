import React from 'react';
import { Community } from '../../atoms/communitiesAtom';

type PostsProps = {
    communityData:Community;
    userId?:string;

};

const Posts:React.FC<PostsProps> = () => {
    
    return <div>POsts</div>
}
export default Posts;