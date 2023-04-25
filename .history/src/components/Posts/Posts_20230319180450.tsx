/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Community } from '../../atoms/communitiesAtom';
import { Post } from '../../atoms/PostAtom';
import { firestore } from '../../firebase/clientApp';
import usePosts from '../../hooks/usePosts';

type PostsProps = {
	communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
	// useAuth State
	const [loading, setLoading] = useState(false);
    const {postStateValue, setPostStateValue} = usePosts();
	const getPosts = async () => {
		try {
			
		} catch (error) {
			
		}
	};
	useEffect(() => {
		getPosts();
	}, []);
	return <div>Posts</div>;
};
export default Posts;
