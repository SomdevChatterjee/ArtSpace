import React from 'react'
import { useRecoilState } from 'recoil'
import { communityStyate } from '../atoms/communitiesAtom'

const useCOmmunityState= () =>{
	const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
}