import { atom } from "recoil";

export type Post = {
    id:string,
    communityId:string,
    creatorId:string,
    creatorDisplayName: string,
    title: string,
    body: string,
    numberOfComments:number,
    votesStatus:number,
    imageUrl ?: string,
    communityImageUrl
}