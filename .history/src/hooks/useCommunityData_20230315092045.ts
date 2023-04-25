import React from 'react'
import { useRecoilState } from 'recoil'
import { communityState } from '../atoms/communitiesAtom'

export const useCommunityData= () =>{
	const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)

	const onJoinOrLeaveCommunity = (communityData) =>{}

	const joinCommunity = () =>{};

	const leaveCommunity = () => {};

	return{
		communityState,
		joinCommunity,
		leaveCommunity
	}
}