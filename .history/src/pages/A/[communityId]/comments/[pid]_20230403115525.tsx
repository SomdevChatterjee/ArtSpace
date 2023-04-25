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
          userIsCreator={false}
          onVote={function (
            post: Post,
            vote: number,
            communityId: string
          ): void {
            throw new Error("Function not implemented.");
          }}
          onDeletePost={function (post: Post): Promise<boolean> {
            throw new Error("Function not implemented.");
          }}
          onSelectPost={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        {/* <Comments/> */}
      </>
      <>{/* <About/> */}</>
    </IndexContentLayout>
  );
};
export default PostPage;
