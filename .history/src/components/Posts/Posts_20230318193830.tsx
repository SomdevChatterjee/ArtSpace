import React from 'react';
import { Community } from '../../atoms/communitiesAtom';

type PostsProps = {
    communityData:Community;
};

const Posts:React.FC<PostsProps> = () => {
    // useAuth State
    const getPosts = async () =>{};
    useEffect(()=>{
        
    })
    return <div>Posts</div>
}
export default Posts;