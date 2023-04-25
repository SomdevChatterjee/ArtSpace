/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { communityState, Community, CommunityState } from '../atoms/communitiesAtom';
import { auth, firestore } from '../firebase/clientApp';
const useCommunityData = ()=>{
    const [user] = useAuthState(auth)
   const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
   const [error, setError] = useState("")
   const [loading, setLoading] = useState(false)
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
   const getMySnippets = async () =>{
    setLoading(true)
    try {
        //get the users
        const snippetsDocs = await getDocs(collection(firestore, `users/${user?.uid}/communitySnippets`));
        

        const snippets = snippetsDocs.docs.map((doc) =>({...doc.data(),}));
        setCommunityStateValue(prev =>({
            ...prev,
            mySnippets:snippets as Array<CommunitySnippet>,
        }))
        console.log(snippets)
    } catch (error) {
        console.log("get my snippets error", error);
    }
   }

   useEffect(()=>{
    if(!user) return;
    getMySnippets()
   }, [user])
   return{
        communityStateValue,
        onJoinOrLeaveCommunity,
    };
    
}
export default useCommunityData