import React, {useEffect, useState} from 'react';
import { Community } from '../../atoms/communitiesAtom';

type PostsProps = {
    communityData:Community;
};

const Posts:React.FC<PostsProps> = ({communityData}) => {
    // useAuth State
    const [loading,setLoading] = useState(false);
    const getPosts = async () =>{
        try {
            const postQuery = query(collection)
        } catch (error) {
            
        }
    };
    useEffect(()=>{
        getPosts();
    },[]);
    return <div>Posts</div>
}
export default Posts;