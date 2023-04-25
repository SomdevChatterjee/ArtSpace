import { collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'
import { Community, communityState } from '../atoms/communitiesAtom'
import { auth, firestore } from '../firebase/clientApp'

export const useCommunityData= () =>{
	const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
	const [loading, setLoading] = useState(false)
	const [error,setError] = useState('')
	const [user] = useAuthState(auth)
	const onJoinOrLeaveCommunity = (communityData:Community, isJoined: boolean) =>{
	
		//is the user sign in ?
		//if not => open auth modal state


		if (isJoined){
			leaveCommunity(communityData.id)
			return;
		}	
		joinCommunity(communityData)
	};

	const getMySnippets =async () => {
		setLoading(true)
		try {
			//get the user snippets
			const snippets = await getDocs(collection(firestore))
		} catch (error) {
			console.log("get my Snippets error", error)
		}

	}

	const joinCommunity = (communityData: Community) =>{};

	const leaveCommunity = (communityId: string) => {};

	return{
		communityStateValue,
		onJoinOrLeaveCommunity,
	}
}