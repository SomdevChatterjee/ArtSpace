import { FieldValue, Timestamp } from "firebase/firestore";
import { atom } from "recoil";
export interface Community {
  id: string;
  creator_Id: string;
  privacyType: "Public" | "Private" | "Restricted";
  createdAt?: Timestamp;
  imageUrl?: string;
  numberOfMembers: number;
}
export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageUrl?: string;
}

interface communityState {
  mySnippets: CommunitySnippet[];
  currentCommunity?: Community;
  snippetsFetched:
}

const defaultCommunityState: communityState = {
  mySnippets: [],
};

export const communityState = atom<communityState>({
  key: "communitiesState",
  default: defaultCommunityState,
});
