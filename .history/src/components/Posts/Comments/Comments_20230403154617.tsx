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

    const onCreateComment =async (commentText) => {}

    const onDeleteComment =async () => {}
    
    const getPostComments =async () => {}

    useEffect(()=>{
        getPostComments();
    },[])
  return <div>Here are the comments</div>;
};
export default Comments;
