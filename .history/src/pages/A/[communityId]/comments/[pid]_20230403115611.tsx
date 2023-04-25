import React from "react";
import { Post } from "../../../../atoms/PostAtom";
import IndexContentLayout from "../../../../components/Layouts/IndexContentLayout";
import PostItem from "../../../../components/Posts/PostItem";
import usePosts from "../../../../hooks/usePosts";

const PostPage: React.FC = () => {
  const { postStateValue, setPostStateValue, onDeletePost, onVote } =
    usePosts();
  return (
    <IndexContentLayout>
      <>
        <PostItem
          post={postStateValue.selectedPost}
          onVote={}
          onDeletePost={onDeletePost}
        />
        {/* <Comments/> */}
      </>
      <>{/* <About/> */}</>
    </IndexContentLayout>
  );
};
export default PostPage;
