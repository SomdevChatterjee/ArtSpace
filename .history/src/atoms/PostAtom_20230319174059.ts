import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Post = {
    id?:number|undefined,
    communityId:string,
    creatorId:string,
    creatorDisplayName: string,
    title: string,
    body: string,
    numberOfComments:number,
    votesStatus:number,
    imageUrl ?: string|undefined,
    communityImageUrl?:string| undefined,
    createAt?:Timestamp | undefined 
}

export interface PostState{
    selectedPost: Post | null;
    posts:Post[]
    //postVotes
}
const defaultPostState : PostState = {
    selectedPost : null,
    posts:[]
}
export const postState = atom<PostState>({
    key:"postState",
    default:defaultPostState
})