import { Timestamp } from "firebase/firestore";

export interface Community{
    id:string,
    creator_Id:string,
    privacyType:'Public' |'Private'|'Restricted',
    createdAt?:Timestamp,
    imageUrl?:
}