import { User } from "firebase/auth";
import React from "react";
import { Post } from "../../../atoms/PostAtom";

type CommentsProps = {
  user: User;
  selectedPost: Post;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({
  user,
  selectedPost,
  communityId,
}) => {

    const onCreateComment = asyn

  return <div>Here are the comments</div>;
};
export default Comments;
