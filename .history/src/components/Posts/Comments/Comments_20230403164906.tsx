import { Box, Flex } from "@chakra-ui/react";
import { create } from "domain";
import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Post } from "../../../atoms/PostAtom";
import CommentInput from "./CommentInput";

type CommentsProps = {
  user: User;
  selectedPost: Post | null;
  communityId: string;
};

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
        const batch = 
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
