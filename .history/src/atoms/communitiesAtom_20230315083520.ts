import { FieldValue, Timestamp } from "firebase/firestore";
import { atom } from "recoil";
export interface Community{
    id:string,
    creator_Id:string,
    privacyType:'Public' |'Private'|'Restricted',
    createdAt?:Timestamp,
    imageUrl?:string,
    numberOfMembers:number
}
interface CommunitySnippet{
  communityId:string,
  isModertor?:true,
  imageUrl?:string
}

interface communityState{
  mySnippets: CommunitySnippet[];
}

export const communityStyate = atom<communityState>({
  key:'communitiesState',
  
})
  
   

  
