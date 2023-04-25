import React from 'react'
import { useRecoilState } from 'recoil';
import { communityState, Community } from '../atoms/communitiesAtom';

const useCommunityData = ()=>{
   const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
   
    const onJoinOrLeaveCommunity = (communityData:Community, isJoined:boolean) =>{
        if(isJoined){
            leaveCommunity(communit)
        }
    }

   const leaveCommunity = ()=>{}
   
    const joinCommunity = ()=>{}
   
   return{
        communityStateValue,
        joinCommunity,
        leaveCommunity
    };
    
}
export default useCommunityData