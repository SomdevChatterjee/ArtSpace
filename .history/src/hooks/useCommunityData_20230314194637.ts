import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { communityState, Community } from '../atoms/communitiesAtom';

const useCommunityData = ()=>{
   const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
   const [error, setError] = useState("")
   const [error, setError] = useState(false)
    const onJoinOrLeaveCommunity = (communityData:Community, isJoined:boolean) =>{
        //if user is signed in 
        //if not =>open auth modal
        if(isJoined){
            leaveCommunity(communityData.id)
            return;
        }
        joinCommunity(communityData)
    }

   const leaveCommunity = (communityId:string)=>{}
   
    const joinCommunity = (communityData:Community)=>{}
   const getMySnippets = () =>{
    set
    try {
        
    } catch (error) {
        console.log("get my snippets error", error);
    }
   }
   return{
        communityStateValue,
        onJoinOrLeaveCommunity,
    };
    
}
export default useCommunityData