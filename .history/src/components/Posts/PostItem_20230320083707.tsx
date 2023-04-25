import React, { useState } from 'react';
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
import moment from 'moment';
type PostItemProps = {
	post: Post;
	userIsCreator: boolean;
	userVoteValue?: number;
	onVote: () => void;
	onDeletePost: (post:Post) => Promise<boolean>;
	onSelectPost: () => void;
};

const PostItem: React.FC<PostItemProps> = ({
	post,
	userIsCreator,
	onVote,
	onDeletePost,
	onSelectPost,
	userVoteValue,
}) => {
    const[loadingImage, setLoadingImage] = useState(true)
	const handleDelete=async () => {

		try {
			const success = await onDeletePost(post);
			if(!sucees)
		} catch (error) {
			console.log()
		}
	}
	return (
		<Flex
			border={'1px solid'}
			bg={'yellow.50'}
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
				bg={'yellow.200'}
				width={'40px'}
				p={2}
				mr={1}
			>
				<Icon
					as={
						userVoteValue === 1
							? IoArrowUpCircleSharp
							: IoArrowUpCircleOutline
					}
					color={userVoteValue === 1 ? 'brand.100' : 'yellow.500'}
					fontSize={22}
					onClick={onVote}
					cursor={'pointer'}
				/>
				<Text fontSize={'9pt'} color={'yellow.600'}>
					{post.votesStatus}
				</Text>
				<Icon
					as={
						userVoteValue === -1
							? IoArrowDownCircleSharp
							: IoArrowDownCircleOutline
					}
					color={userVoteValue === -1 ? 'brand.100' : 'yellow.500'}
					fontSize={22}
					onClick={onVote}
					cursor={'pointer'}
				/>
			</Flex>
			<Flex direction={'column'} width={'100%'}>
				<Stack spacing={1} p="10px">
					<Stack
						direction={'row'}
						spacing={0.6}
						align="center"
						fontSize={'9pt'}
					>
						{/* home page check  */}
						<Text>
							Posted By u/{post.creatorDisplayName}{' '}
							{moment(new Date(post.createAt?.seconds * 1000)).fromNow()}
						</Text>
					</Stack>
					<Text fontSize={'12pt'} fontWeight={600} color={'yellow.600'}>
						{post.title}
					</Text>
					<Text fontSize={'10pt'} color={'yellow.500'}>
						{post.body}
					</Text>
					{post.imageUrl && (
						<Flex justify={'center'} align="center" p={2}>
                            {loadingImage && (<Skeleton height={"200px"} width="100%" borderRadius={4}/>)}
							<Image
								src={post.imageUrl}
								alt="PostImage"
								maxHeight={'460px'}
                                onLoad={()=>setLoadingImage(false)}
							/>
						</Flex>
					)}
				</Stack>
				<Flex direction={'row'} mb={0.5} color="yellow.400">
					<Flex
						align={'center'}
						p={'8px 10px'}
						borderRadius={4}
						_hover={{ bg: 'yellow.200' }}
						cursor={'pointer'}
					>
						<Icon as={BsChat} mr={2} />
						<Text fontSize={'9pt'}>{post.numberOfComments}</Text>
					</Flex>
					<Flex
						align={'center'}
						p={'8px 10px'}
						borderRadius={4}
						_hover={{ bg: 'yellow.200' }}
						cursor={'pointer'}
					>
						<Icon as={IoArrowRedoOutline} mr={2} />
						<Text fontSize={'9pt'}>Share</Text>
					</Flex>
					<Flex
						align={'center'}
						p={'8px 10px'}
						borderRadius={4}
						_hover={{ bg: 'yellow.200' }}
						cursor={'pointer'}
					>
						<Icon as={IoBookmarkOutline} mr={2} />
						<Text fontSize={'9pt'}>Save</Text>
					</Flex>
					{userIsCreator && (
						<Flex
							align={'center'}
							p={'8px 10px'}
							borderRadius={4}
							_hover={{ bg: 'yellow.200' }}
							cursor={'pointer'}
                            onClick={onDeletePost}
						>
							<Icon as={AiOutlineDelete} mr={2} />
							<Text fontSize={'9pt'}>Delete</Text>
						</Flex>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};
export default PostItem;
