import { async } from '@firebase/util'
import { deleteDoc, doc, collection, getDocs, query, where } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Post, postState } from '../atoms/PostAtom'
import { firestore, storage } from '../firebase/clientApp'
const usePosts = () =>{
    const [postStateValue, setPostStateValue] = useRecoilState(postState);
    
    const onVote = async (post: Post, vote:number, communityId:string) => {
        if(newVote){

        }
        //Existing vote[they  have posted before
        else{
            //removing their vote (up => neutral Or down => neutural)


            //flipping their vote(up =.)

        }
    };

    const onSelectPost = () => {};
    
    const onDeletePost = async (post:Post): Promise<boolean> => {
        try {
            //if image is present in the post then it will delete it if exists
            if(post.imageUrl){
                const imageRef = ref(storage, `posts/${post.id}/image`);
                await deleteObject(imageRef);
            }
            //delete the entire post document from the 'posts' collection from firestore
            const postDocRef = doc(firestore, 'posts', post.id!);
            await deleteDoc(postDocRef);
            //update the recoil state 
           setPostStateValue(prev =>({
            ...prev,
            posts:prev.posts.filter(item => item.id !== post.id)
           })) 
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