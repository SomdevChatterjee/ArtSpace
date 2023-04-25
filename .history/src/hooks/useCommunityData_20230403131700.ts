/* eslint-disable react-hooks/exhaustive-deps */
import { async } from '@firebase/util';
import {
	collection,
	doc,
	getDocs,
	increment,
	writeBatch,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authModalState } from '../atoms/authModalAtoms';
import {
	Community,
	CommunitySnippet,
	communityState,
} from '../atoms/communitiesAtom';
import { auth, firestore } from '../firebase/clientApp';

export const useCommunityData = () => {
	const router = useRouter()
	const [communityStateValue, setCommunityStateValue] =
		useRecoilState(communityState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState)
	const onJoinOrLeaveCommunity = (
		communityData: Community,
		isJoined: boolean
	) => {
		//is the user sign in ?
		//if not => open auth modal state
		if(!user){
			//open the modal
			setAuthModalState({open:true, view:"login"})
			return;
		}

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
			setCommunityStateValue((prev) => ({
				...prev,
				mySnippets: snippets as CommunitySnippet[],
			}));

			console.log(snippets);
			console.log(communityStateValue);
		} catch (error) {
			console.log('get my Snippets error', error);
		}
		setLoading(false);
	};

	const joinCommunity = async (communityData: Community) => {
		try {
			// creating a new community snippets
			const newSnippets: CommunitySnippet = {
				communityId: communityData.id,
				imageUrl: communityData.imageUrl || '',
			};
			// Batch writes
			const batch = writeBatch(firestore);

			batch.set(
				doc(
					firestore,
					`users/${user?.uid}/communitySnippets`,
					communityData.id
				),
				newSnippets
			);
			// updating the numberOfMembers 1
			batch.update(doc(firestore, `communities`, communityData.id), {
				numberOfMembers: increment(1),
			});
			await batch.commit();
			//update recoil state = commmunityState.mySnippets
			setCommunityStateValue((prev) => ({
				...prev,
				mySnippets: [...prev.mySnippets, newSnippets],
			}));
		} catch (error: any) {
			console.log('joinCommunityError', error);
			setError(error.message);
		}
		setLoading(false);
	};

	const leaveCommunity = async (communityId: string) => {
		try {
			// Batch writes
			const batch = writeBatch(firestore);
			// deleting the community snippets from the user
			batch.delete(
				doc(firestore, `users/${user?.uid}/communitySnippets`, communityId)
			);
			// updating the numberOfMembers 1
			batch.update(doc(firestore, `communities`, communityId), {
				numberOfMembers: increment(-1),
			});
			await batch.commit();
			//update recoil state = commmunityState.mySnippets
			setCommunityStateValue((prev) => ({
				...prev,
				mySnippets: prev.mySnippets.filter(
					(item) => item.communityId !== communityId
				),
			}));
		} catch (error:any) {
			console.log("leaveCommunityError", error.message)
			setError(error.message)
		}
	};

	const getCommunityData =async (communityId: string) => {
		try {
			const communityDocRef = doc(firestore, 'communities', communityId)
			const communityDoc = 
		} catch (error:any) {
			console.log("get community data error: ", error.message)
		}
	}

	useEffect(()=>{
		const {communityId} =  router.query;
		if(communityId&& !communityStateValue.currentCommunity){
			getCommunityData(communityId as string)
		}
	},[])
	useEffect(() => {
		if (!user) {
			setCommunityStateValue(prev =>({
				...prev,
				mySnippets: [],

			}));
			return;
		};
		getMySnippets();
	}, [user]);

	return {
		communityStateValue,
		onJoinOrLeaveCommunity,
		loading,
	};
};
