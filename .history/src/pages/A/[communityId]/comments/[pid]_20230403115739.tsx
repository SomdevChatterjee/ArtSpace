import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Post } from "../../../../atoms/PostAtom";
import IndexContentLayout from "../../../../components/Layouts/IndexContentLayout";
import PostItem from "../../../../components/Posts/PostItem";
import { auth } from "../../../../firebase/clientApp";
import usePosts from "../../../../hooks/usePosts";

const PostPage: React.FC = () => {
  const { postStateValue, setPostStateValue, onDeletePost, onVote } =
    usePosts();
    const [user] = useAuthState(auth)
  return (
    <IndexContentLayout>
      <>
        <PostItem
          post={postStateValue.selectedPost}
          onVote={onVote}
          userVoteValue={postStateValue.postVotes.find(item => item.postId === postStateValue.selectedPost?.id)?.voteValue}
          onDeletePost={onDeletePost}
          userIsCreator={}
        />
        {/* <Comments/> */}
      </>
      <>{/* <About/> */}</>
    </IndexContentLayout>
  );
};
export default PostPage;
