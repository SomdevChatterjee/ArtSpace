import { Box, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
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

    const[commentText, setCommentText] = useState("")
    const[comments, setComments] = useState([])
    const[fetchLoading, setFetchLoading] = useState(false)
    const[createLoading, setCreateLoading] = useState(false)

  const onCreateComment = async (commentText: string) => {};

  const onDeleteComment = async (/*comment:Comment*/) => {};

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
        <CommentInput/>
      </Flex>
    </Box>
  );
};
export default Comments;