import { async } from '@firebase/util'
import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { useRecoilState } from 'recoil'
import { Post, postState } from '../atoms/PostAtom'
import { firestore, storage } from '../firebase/clientApp'
const usePosts = () =>{
    const [postStateValue, setPostStateValue] = useRecoilState(postState);
    
    const onVote = async () => {};

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
           //afte the post is deleted we will see if the number of posts present

           const postQuery = query(
			collection(firestore, 'posts'),
			where('communityId', '==', communityData.id)
		);
		const postDocs = await getDocs(postQuery);
		const postsNumber = postDocs.docs.length;
			console.log(postsNumber)
		setDocumentsLength(postsNumber);

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