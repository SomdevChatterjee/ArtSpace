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
    const onVote = async (post: Post, vote:number, communityId:string) => {
        //check if user is present if not, open auth model
        
        try {
            const { voteStatus } = post;
            const existingVote = postStateValue.postVotes.find(vote => vote.postId === post.id);
            
            const batch = writeBatch(firestore)
            const updatedPost = {...post};
            const updatedPosts = [...postStateValue.posts];
            let updatePostVotes = [...postStateValue.postVotes];
            let voteChange = vote
            
            //New Vote
            if(!existingVote){
                //add/subtract to/from post.voteStatus
                //create a new postVote document
                const postVoteRef = doc(collection(firestore, 'users',`${user?.uid}/postVotes`));
                
                const newVote:PostVote = {
                    id:postVoteRef.id,
                    postId:post.id!,
                    communityId,
                    voteValue:vote, //1 or -1
                };

                batch.set(postVoteRef, newVote);

                //add/subtract 1 to/from the post.voteStatus

                updatedPost.voteStatus = voteStatus + vote;
                updatePostVotes = [...updatePostVotes, newVote];
            }
            
            //Existing vote[they  have posted before

            else{

                const postVoteRef = doc(firestore, 'users', `${user?.uid}/postVotes/${existingVote.id}`)

                //removing their vote (up => neutral Or down => neutural)
            
                if(existingVote.voteValue ==vote){
            
                    //add/subtracy 1 to /from post.voteStatus
                    updatedPost.voteStatus
                    //delete the postVote document
                }
    
                //flipping their vote(up => down or down  => Up)
            
                else{
            
                    //add subtract 2 to/from post.voteStatus
            
                    //updating the existing postVote document
                }
            }
            
        } catch (error:any) {
            console.log("onVoteError", error.message)
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