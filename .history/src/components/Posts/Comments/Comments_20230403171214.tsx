import { Box, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { collection, doc, increment, serverTimestamp, Timestamp, writeBatch } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Post, postState } from "../../../atoms/PostAtom";
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
  const [comments, setComments]  = useState<Comment[]>([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
    const setPostState = useSetRecoilState(postState)

  const onCreateComment = async () => {

    setCreateLoading(true);

      try {
          //create a comment document
          const batch = writeBatch(firestore);
          const commentDocRef = doc(collection(firestore, 'comments'))
          const newComment: Comment={
              id:commentDocRef.id,
              creatorId:user.uid,
              creatorDisplayText:user.email!.split('@')[0],
              communityId,
              postId:selectedPost?.id!,
              postTitle:selectedPost?.title!,
              text:commentText,
              createdAt:serverTimestamp() as Timestamp
            } 
            batch.set(commentDocRef, newComment);
            //update post number Of Comments + 1
            const postDocRef = doc(firestore, 'posts', selectedPost?.id as string)
            batch.update(postDocRef,{
                numberOfComments:increment(1),
            })

            await batch.commit()
            
            //update client recoil state
            setCommentText("");
            setComments(prev =>[newComment, ...prev])
            setPostState(prev =>({
                ...prev,
                selectedPost:{
                    ...prev.selectedPost,
                    numberOfComments:p
                }
            }))
        } catch (error: any) {
            console.log("onCreateComment Error:", error.message)    
        }

        setCreateLoading(false);
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
