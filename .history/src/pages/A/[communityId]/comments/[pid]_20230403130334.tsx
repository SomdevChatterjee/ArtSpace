import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Post } from "../../../../atoms/PostAtom";
import IndexContentLayout from "../../../../components/Layouts/IndexContentLayout";
import PostItem from "../../../../components/Posts/PostItem";
import { auth, firestore } from "../../../../firebase/clientApp";
import usePosts from "../../../../hooks/usePosts";

const PostPage: React.FC = () => {
  const { postStateValue, setPostStateValue, onDeletePost, onVote } =
    usePosts();
    const router = useRouter();
  const [user] = useAuthState(auth);
    const fetchPost = async (postId: string) => {
        try {
            const postDocRef = doc(firestore, 'posts', postId)
            const postDoc = await getDoc(postDocRef);
            setPostStateValue(prev =>({
                ...prev,
                selectedPost:{id:postDoc.id, ...postDoc.data()} as Post,
            }))
        } catch (error) {
            console.log('fetchPost error: ', error)
        }
    }
    useEffect(()=>{
        const { pid } = router.query;
        if(pid && !postStateValue.selectedPost){
            fetchPost(pid as string)
        }
    },[router.query, postStateValue.selectedPost]);

  return (
    <IndexContentLayout>
      <>
        {postStateValue.selectedPost && (
          <PostItem
            post={postStateValue.selectedPost}
            onVote={onVote}
            userVoteValue={
              postStateValue.postVotes.find(
                (item) => item.postId === postStateValue.selectedPost?.id
              )?.voteValue
            }
            onDeletePost={onDeletePost}
            userIsCreator={user?.uid === postStateValue.selectedPost?.creatorId}
          />
        )}
        {/* <Comments/> */}
      </>
      <>{/* <About/> */}</>
    </IndexContentLayout>
  );
};
export default PostPage;
