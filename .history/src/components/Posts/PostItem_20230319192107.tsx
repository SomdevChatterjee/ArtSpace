import React from 'react';
import { Post } from '../../atoms/PostAtom';
import {
    Flex,
    Icon,
    Image,
    Skeleton,
    Spinner,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { NextRouter } from "next/router";
  import { AiOutlineDelete } from "react-icons/ai";
  import { BsChat, BsDot } from "react-icons/bs";
  import { FaReddit } from "react-icons/fa";
  import {
    IoArrowDownCircleOutline,
    IoArrowDownCircleSharp,
    IoArrowRedoOutline,
    IoArrowUpCircleOutline,
    IoArrowUpCircleSharp,
    IoBookmarkOutline,
  } from "react-icons/io5";
type PostItemProps = {
	post: Post;
	userIsCreator: boolean;
	userVoteValue?: number;
	onVote: () => void;
	onDeletePost: () => void;
	onSelectPost: () => void;
};

const PostItem: React.FC<PostItemProps> = ({
	post,
	userIsCreator,
	onVote,
	onDeletePost,
	onSelectPost,
}) => {
	return (
       <Flex border={"1px solid"} bg={"white"} borderColor={"gray.300"} borderRadius={4} _hover={{borderColor:}}>
        {post.title}
       </Flex>
    );
};
export default PostItem;
