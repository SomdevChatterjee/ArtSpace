import { async } from '@firebase/util'
import React from 'react'
import { useRecoilState } from 'recoil'
import { Post, postState } from '../atoms/PostAtom'
const usePosts = () =>{
    const [postStateValue, setPostStateValue] = useRecoilState(postState);
    
    const onVote = async () => {};

    const onSelectPost = () => {};
    
    const onDeletePost = async (post:Post): Promise<boolean> => {
        try {
            //if image is present in the post then it will delete it if exists
            if(post.)
            //delete the entire post document from the 'posts' collection from firestore
    
            //update the recoil state 
            
            return true
        } catch (error) {
            return false
        }

    };

    return{
        postStateValue,
        setPostStateValue,
        onVote,
        onSelectPost,
        onDeletePost,
    };
}
export default usePosts