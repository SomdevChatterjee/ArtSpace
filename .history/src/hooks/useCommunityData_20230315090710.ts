import React from 'react'
import { useRecoilState } from 'recoil'
import { communityState } from '../atoms/communitiesAtom'

const useCOmmunityState= () =>{
	const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)

	const joinCommunity = () =>{}
}