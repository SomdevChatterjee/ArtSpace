/* eslint-disable react-hooks/exhaustive-deps */
import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	where,
} from 'firebase/firestore';
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
		console.log("WE ARE GETTING POSTS!!!");
	
		setLoading(true);
		try {
		  const postsQuery = query(
			collection(firestore, "posts"),
			where("communityId", "==", communityData?.id!),
			orderBy("createdAt", "desc")
		  );
		  const postDocs = await getDocs(postsQuery);
		  const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		  setPostStateValue((prev) => ({
			...prev,
			posts: posts as Post[]
			postUpdateRequired: false,
		  }));
		} catch (error: any) {
		  console.log("getPosts error", error.message);
		}
		setLoading(false);
	  };
	useEffect(() => {
		getPosts();
	}, []);
	return <div>Posts</div>;
};
export default Posts;
