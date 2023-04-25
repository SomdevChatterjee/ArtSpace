import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Post = {
    id?:string|undefined,
    communityId:string,
    creatorId:string,
    creatorDisplayName: string,
    title: string,
    body: string,
    link:string
    numberOfComments:number,
    votesStatus:number,
    imageUrl ?: string|undefined,
    communityImageUrl?:string| undefined,
    createAt:Timestamp
};
export type PostVote = {
    id:string;
    postId:string;
    communityId:string;
    voteValue: number;
}

export interface PostState{
    selectedPost: Post | null;
    posts:Post[]
    postVotes: PostVote[]
}
const defaultPostState : PostState = {
    selectedPost : null,
    posts:[],
    postVotes:[],
}
export const postState = atom<PostState>({
    key:"postState",
    default:defaultPostState
})