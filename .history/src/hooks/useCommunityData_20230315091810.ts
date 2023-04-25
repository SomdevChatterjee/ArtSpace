import React from 'react'
import { useRecoilState } from 'recoil'
import { communityState } from '../atoms/communitiesAtom'

export const useCommunityState= () =>{
	const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)

	const joinCommunity = () =>{};

	const leaveCommunity = () => {};

	return{
		communityState,
		joinCommunity,
		leaveCommunity
	}
}