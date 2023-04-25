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
} from '@chakra-ui/react';
import { NextRouter } from 'next/router';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsChat, BsDot } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import {
	IoArrowDownCircleOutline,
	IoArrowDownCircleSharp,
	IoArrowRedoOutline,
	IoArrowUpCircleOutline,
	IoArrowUpCircleSharp,
	IoBookmarkOutline,
} from 'react-icons/io5';
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
    userVoteValue
}) => {
	return (
		<Flex
			border={'1px solid'}
			bg={'yellow.100'}
			color={'yellow.600'}
			borderColor={'yellow.200'}
			borderRadius={4}
			_hover={{ borderColor: 'yellow.400' }}
			cursor={'pointer'}
			onClick={onSelectPost}
		>
			<Flex
				direction={'column'}
				align={'center'}
				bg={'yellow.300'}
				width={'40px'}
				p={2}
				mr={1}
			>
                <Icon as={userVoteValue === 1 ? ioarrowup}/>
			</Flex>
			{post.title}
		</Flex>
	);
};
export default PostItem;
