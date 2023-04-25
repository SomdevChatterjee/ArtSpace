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
  import moment from "moment";
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
	onVote: () => {};
	onDeletePost: () => {};
	onSelectPost: () => {};
};

const PostItem: React.FC<PostItemProps> = ({
	post,
	userIsCreator,
	onVote,
	onDeletePost,
	onSelectPost,
}) => {
	return <div>Have a good coding</div>;
};
export default PostItem;
