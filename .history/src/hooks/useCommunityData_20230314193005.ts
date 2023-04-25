import React from 'react'
import { useRecoilState } from 'recoil';
import { communityState } from '../atoms/communitiesAtom';

const useCommunityData = ()=>{
   const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
    const leaveCommunity = ()=>{}
    const joinCommunity = ()=>{}
   
   return{
        communityStateValue
    };
    
}
export default useCommunityData