import { Box, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, {useEffect} from "react";
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

    const onCreateComment =async (commentText:string) => {};

    const onDeleteComment =async (/*comment:Comment*/) => {};
    
    const getPostComments =async () => {};

    useEffect(()=>{
        getPostComments();
    },[])
  return (<Box bg={"yellow.200"} borderRadius="0px 0px 4px 4px" padding={2}>
    <Flex direction={}>
        {/* CommentInput */}
    </Flex>
  </Box>);
};
export default Comments;
