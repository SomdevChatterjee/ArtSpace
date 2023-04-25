/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react';
import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Community } from '../../atoms/communitiesAtom';
import { Post } from '../../atoms/PostAtom';
import { auth, firestore } from '../../firebase/clientApp';
import usePosts from '../../hooks/usePosts';
import PostItem from './PostItem';

type PostsProps = {
	communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
	// useAuth State
	const [user] = useAuthState(auth);
	const [loading, setLoading] = useState(false);
	const {
		postStateValue,
		setPostStateValue,
		onVote,
		onSelectPost,
		onDeletePost,
	} = usePosts();
	const getPosts = async () => {
		try {
			// get posts for the community
			const postQuery = query(
				collection(firestore, 'posts'),
				where('communityId', '==', communityData.id),
				orderBy('createAt', 'desc')
			);
			const postDocs = await getDocs(postQuery);
			const posts = postDocs.docs.map((docs) => ({
				id: docs.id,
				...docs.data(),
			}));
			setPostStateValue((prev) => ({
				...prev,
				posts: posts as Post[],
			}));
			console.log('queryDocs', posts);
			console.log('communityData: ', communityData);
		} catch (error: any) {
			console.log('getPost error: ', error.message);
		}
	};
	useEffect(() => {
		getPosts();
	}, []);
	return (
		<stack>
		{<PostItem/>}	
		</stack>
	);
};
export default Posts;
