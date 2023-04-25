import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Post = {
    id:string| undefined,
    communityId:string | string[] | undefined,
    creatorId:string| undefined,
    creatorDisplayName: string| undefined,
    title: string| undefined,
    body: string| undefined,
    numberOfComments:number| undefined,
    votesStatus:number| undefined,
    imageUrl ?: string| undefined,
    communityImageUrl:string| undefined,
    createAt:Timestamp
}

interface PostState{
    selectedPost: Post | null;
    posts:Post[]
    //postVotes
}
const defaultPostState : PostState = {
    selectedPost:null,
    posts:[]
}
export const postState = atom<PostState>({
    key:"postState",
    default:defaultPostState,
})