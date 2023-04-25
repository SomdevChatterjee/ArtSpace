import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { Community, communityState } from '../atoms/communitiesAtom'

export const useCommunityData= () =>{
	const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
	const [loading, setLoading] = useState(false)
	const [error,setError] = useState('')
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