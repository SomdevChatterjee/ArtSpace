/* eslint-disable react-hooks/exhaustive-deps */
import { collection, doc, getDocs, increment, writeBatch } from 'firebase/firestore';
import { write } from 'fs';
import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { communityState, Community, CommunitySnippet} from '../atoms/communitiesAtom';
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

   const leaveCommunity = (communityId:string)=>{
   //Batch write
    //deleting the community snippet deom the user 
    //updating the number of members  by (-1)


    try {
        const batch = writeBatch(firestore);
        batch.delete(doc(firestore, `users/${user?.uid}/communitySnippets`, communityId));

        batch.update(doc(firestore, "communities", communityId), {
            number
        })
    } catch (error:any) {
        console.log("Join community error", error)
        setError(error.message);
    }

   }
   
    const joinCommunity = async (communityData:Community)=>{
    //batch write
        //create a new community snippet for its user who want to join that community
        
        
        try {
            const batch = writeBatch(firestore)
            
            const newSnippet:CommunitySnippet = {
                communityId: communityData.id,
                imageURL: communityData.imageUrl || "",
            };
            
            //updating the number of members in this community 
            
            batch.set(doc(firestore, `users/${user?.uid}/communitySnippets`), newSnippet)
            batch.update(doc(firestore, `communities`, communityData.id), {
                numberOfMembers:increment(1),
            });
            await batch.commit();
            
            //update the recoil state- communitySnippets.mySnippets
            setCommunityStateValue(prev =>({
                ...prev,
                mySnippets: [...prev.mySnippets, newSnippet],
            }));

        } catch (error:any) {
            console.log("Join community error", error)
            setError(error.message);   
        }


    }
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

    setLoading(false);

   }

   useEffect(()=>{
    if(!user) return;
    getMySnippets()
   }, [user])
   return{
        communityStateValue,
        onJoinOrLeaveCommunity,
        loading,
    };
    
}
export default useCommunityData