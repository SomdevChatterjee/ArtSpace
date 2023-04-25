import { Box, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { collection, doc, Timestamp, writeBatch } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Post } from "../../../atoms/PostAtom";
import { firestore } from "../../../firebase/clientApp";
import CommentInput from "./CommentInput";

type CommentsProps = {
  user: User;
  selectedPost: Post | null;
  communityId: string;
};
export type Comment = {
    id:string;
    creatorId:string;
    creatorDisplayText:string;
    communityId:string;
    postId:string;
    postTitle:string;
    text:string;
    createdAt:Timestamp;

}
const Comments: React.FC<CommentsProps> = ({
  user,
  selectedPost,
  communityId,
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

  const onCreateComment = async (commentText: string) => {
    //create a comment document
    //update post number Of Comments + 1
    try {
        const batch = writeBatch(firestore);
        const commentDocRef = doc(collection(firestore, 'comments'))
        const newComment: Comment={
            id:commentDocRef.id,
            creatorId:user.uid,
            creatorDisplayText:user.email!.split('@')[0],
            postId:selectedPost?.id!,
            postTitle:selectedPost?.title!,
            text:commentText,
            createdAt:
        } 
    } catch (error) {
        
    }

    //update client recoil state
  };

  const onDeleteComment = async (/*comment:Comment*/) => {
    //delete comment document
    //update post numberOfComments - 1

    //update client recoil state
  };

  const getPostComments = async () => {};

  useEffect(() => {
    getPostComments();
  }, []);
  return (
    <Box bg={"yellow.100"} borderRadius="0px 0px 4px 4px" padding={2}>
      <Flex
        direction={"column"}
        pl={10}
        pr={4}
        mb={6}
        fontSize="10pt"
        width={"100%"}
      >
        <CommentInput
          commentText={commentText}
          setCommentText={setCommentText}
          createLoading={createLoading}
          user={user}
          onCreateComment={onCreateComment}
        />
      </Flex>
    </Box>
  );
};
export default Comments;
