import { Box, Flex, Icon, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import React from "react";
import { FaReddit } from "react-icons/fa";
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from "react-icons/io5";

export type Comment = {
  id: string;
  creatorId: string;
  creatorDisplayText: string;
  communityId: string;
  postId: string;
  postTitle: string;
  text: string;
  createdAt: Timestamp;
};

type CommentItemProps = {
  comment: Comment;
  onDeleteComment: (comment: Comment) => void;
  loadingDelete: boolean;
  userId: string;
};

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  onDeleteComment,
  loadingDelete,
  userId,
}) => {
  return (
    <Flex>
    <Box mr={2}>
      <Icon as={FaReddit} fontSize={30} color="yellow.300" />
    </Box>
    <Stack spacing={1}>
      <Stack direction="row" align="center" spacing={2} fontSize="8pt">
        <Text
          fontWeight={700}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          {comment.creatorDisplayText}
        </Text>
        {comment.createdAt?.seconds && (
          <Text color="yellow.600">
            {moment(new Date(comment.createdAt?.seconds * 1000)).fromNow()}
          </Text>
        )}
        {loadingDelete && <Spinner size="sm" />}
      </Stack>
      <Text fontSize="10pt">{comment.text}</Text>
      <Stack
        direction="row"
        align="center"
        cursor="pointer"
        fontWeight={600}
        color="gray.500"
      >
        <Icon as={IoArrowUpCircleOutline} />
        <Icon as={IoArrowDownCircleOutline} />
        {userId === comment.creatorId && (
          <>
            <Text fontSize="9pt" _hover={{ color: "yello.500" }}>
              Edit
            </Text>
            <Text
              fontSize="9pt"
              _hover={{ color: "yello.500" }}
              onClick={() => onDeleteComment(comment)}
            >
              Delete
            </Text>
          </>
        )}
      </Stack>
    </Stack>
  </Flex>
  );
};
export default CommentItem;
