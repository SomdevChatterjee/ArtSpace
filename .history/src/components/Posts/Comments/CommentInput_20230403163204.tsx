import { User } from "firebase/auth";
import React from "react";

type CommentInputProps = {
  commentText: string;
  SetCommentText: (value: string) => void;
  createLoading: boolean;
  user: User;
  onCreateComment: (comText: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({
  commentText,
  setCommentText,
  createLoading,
  user,
}) => {
  return <div>Have a good coding</div>;
};
export default CommentInput;
