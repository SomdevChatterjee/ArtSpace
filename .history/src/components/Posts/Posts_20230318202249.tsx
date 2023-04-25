import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Community } from '../../atoms/communitiesAtom';
import { Post, PostState } from '../../atoms/PostAtom';
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
			const postQuery = query(
				collection(firestore, 'posts'),
				where('communityId', '==', communityData.id),
                orderBy("createdAt", "desc")
			);
            const postDocs = await getDocs(postQuery);
            const posts = postDocs.docs.map((doc) =>({id : doc.id, ...doc.data() }));
            setPostStateValue(prev =>({
                ...prev, 
                posts: posts as PostState
            }))
            console.log("posts", posts)
		} catch (error:any) {
            console.log("Posts Errors", error.message)
        }
	};
	useEffect(() => {
		getPosts();
	}, []);
	return <div>Posts</div>;
};
export default Posts;
