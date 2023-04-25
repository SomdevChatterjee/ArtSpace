import React from 'react'
import { useRecoilState } from 'recoil'
import { Community, communityState } from '../atoms/communitiesAtom'

export const useCommunityData= () =>{
	const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)

	const onJoinOrLeaveCommunity = (communityData:Community, isJoined: boolean) =>{
		//is the user sign in ?
		//if not => open auth modal state


		if (isJoined){
			leaveCommunity(communityData.)
		}	
	};

	const joinCommunity = () =>{};

	const leaveCommunity = () => {};

	return{
		communityState,
		joinCommunity,
		leaveCommunity
	}
}