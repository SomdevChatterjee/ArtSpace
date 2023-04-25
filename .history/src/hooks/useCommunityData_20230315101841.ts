/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { Community, CommunitySnippet, communityState } from '../atoms/communitiesAtom';
import { auth, firestore } from '../firebase/clientApp';

export const useCommunityData = () => {
	const [communityStateValue, setCommunityStateValue] =
		useRecoilState(communityState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [user] = useAuthState(auth);
	
	const onJoinOrLeaveCommunity = (
		communityData: Community,
		isJoined: boolean
	) => {
		//is the user sign in ?
		//if not => open auth modal state

		if (isJoined) {
			leaveCommunity(communityData.id);
			return;
		}
		joinCommunity(communityData);
	};

	const getMySnippets = async () => {
		setLoading(true);
		try {
			//get the user snippets
			const snippetsDocs = await getDocs(
				collection(firestore, `users/${user?.uid}/communitySnippets`)
			);
			console.log(snippetsDocs);
			const snippets = snippetsDocs.docs.map((doc) => ({ ...doc.data() }));
			setCommunityStateValue(prev =>({
				...prev, 
				mySnippets :snippets as CommunitySnippet[],
			}));

			console.log(snippets);
			console.log(communityStateValue)
		} catch (error) {
			console.log('get my Snippets error', error);
		}
		setLoading(false);
	};

	const joinCommunity = (communityData: Community) => {
		//creating a new community snippets for the user

		// 
	};

	const leaveCommunity = (communityId: string) => {};

	useEffect(() => {
		if (!user) return;
		getMySnippets();
	}, [user]);

	return {
		communityStateValue,
		onJoinOrLeaveCommunity,
		loading
	};
};
