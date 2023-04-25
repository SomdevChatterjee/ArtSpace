import { async } from '@firebase/util'
import { deleteDoc, doc, collection, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import { write } from 'fs'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'
import { Post, postState, PostVote } from '../atoms/PostAtom'
import { auth, firestore, storage } from '../firebase/clientApp'
const usePosts = () =>{
    const [postStateValue, setPostStateValue] = useRecoilState(postState);
    const [user] = useAuthState(auth)
    const onVote = async () => {
        
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