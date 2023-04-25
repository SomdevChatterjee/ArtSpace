import { ArrowUpIcon } from "@chakra-ui/icons";
import { Flex, Text, Icon, Stack } from "@chakra-ui/react";
import {
  query,
  collection,
  where,
  limit,
  getDocs,
  orderBy,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFire } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";
import { Post, postState, PostVote } from "../../../atoms/PostAtom";
import CreatePostLink from "../../../components/Community/CreatePostLink";
import JoinCommunities from "../../../components/Community/JoinCommunities";
import ProfileCommunities from "../../../components/Community/ProfileCommunities";
import Recommendations from "../../../components/Community/Recommendations";
import IndexContentLayout from "../../../components/Layouts/IndexContentLayout";
import UserShow from "../../../components/Navbar/UserShow";
import PostItem from "../../../components/Posts/PostItem";
import PostLoader from "../../../components/Posts/PostLoader";
import { auth, firestore } from "../../../firebase/clientApp";
import { useCommunityData } from "../../../hooks/useCommunityData";
import usePosts from "../../../hooks/usePosts";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  const [user, loadingUser] = useAuthState(auth);
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onDeletePost,
    onSelectPost,
  } = usePosts();

  const [loading, setLoading] = useState(false);
  const { communityStateValue } = useCommunityData();

  const buildUserHomeFeed = async () => {
    setLoading(true);
    try {
      if (communityStateValue.mySnippets.length) {
        //get posts from the user communities
        const myCommunityIds = postStateValue.posts.map(
          (snippet) => snippet.creatorId
        );
        const postQuery = query(
          collection(firestore, "posts"),
          where("creatorId", "==", user?.uid)
        );
        const postDocs = await getDocs(postQuery);
        const posts = postDocs.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setPostStateValue((prev) => ({
          ...prev,
          posts: posts as Post[],
        }));
        console.log("posts", posts);
      } else {
        buildNonUserHomeFeed();
      }
    } catch (error: any) {
      console.log("buildUserHomeFeed Error: ", error.message);
    }
    setLoading(false);
  };

  const buildNonUserHomeFeed = async () => {
    setLoading(true);
  };

  const getUserPostVotes = async () => {
    try {
      const postIds = postStateValue.posts.map((post) => post.id);
      const postVotesQuery = query(
        collection(firestore, `users/${user?.uid}/postVotes`),
        where("postId", "in", postIds)
      );
      const postDocs = await getDocs(postVotesQuery);
      const postVotes = postDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostStateValue((prev) => ({
        ...prev,
        postVotes: postVotes as PostVote[],
      }));
    } catch (error: any) {
      console.log("getUserPostVotes error: ", error.message);
    }
  };

  //useEffects

  useEffect(() => {
    if (communityStateValue.snippetsFetched) buildUserHomeFeed();
  }, [communityStateValue.snippetsFetched]);

  useEffect(() => {
    if (!user && !loadingUser) buildNonUserHomeFeed();
  }, [user, loadingUser]);

  useEffect(() => {
    if (user && postStateValue.posts.length) getUserPostVotes();
    return () => {
      setPostStateValue((prev) => ({
        ...prev,
        postVotes: [],
      }));
    };
  }, [user, postStateValue.posts]);
  return (
    <IndexContentLayout>
      <>
        <Flex
          width={"100%"}
          bg={"white"}
          padding="10px"
          borderRadius={"5px"}
          align="center"
          justify={"flex-start"}
          height="50px"
          mb={2}
        >
          <Flex
            mr={2}
            color={"blackAlpha.500"}
            _hover={{
              borderRadius: "20px",
              bg: "gray",
              padding: "6px",
              color: "yellow.500",
            }}
          >
            <Icon as={TiStarburst} mr={1} />
            <Text
              fontWeight={700}
              color={"blackAlpha.500"}
              _hover={{ color: "yellow.500" }}
            >
              New
            </Text>
          </Flex>
          <Flex
            mr={2}
            color={"blackAlpha.500"}
            _hover={{
              borderRadius: "20px",
              bg: "gray",
              padding: "6px",
              color: "yellow.500",
            }}
          >
            <Icon as={BsFire} mr={1} />
            <Text fontWeight={700}>Hot</Text>
          </Flex>
          <Flex
            mr={2}
            color={"blackAlpha.500"}
            _hover={{
              borderRadius: "20px",
              bg: "gray",
              padding: "6px",
              color: "yellow.500",
            }}
          >
            <Icon as={ArrowUpIcon} fontSize={"15pt"} mr={1} />
            <Text fontWeight={700}>Top</Text>
          </Flex>
        </Flex>
        {loading ? (
          <Flex direction={"column"} width="100%" height={"20px"}>
            <PostLoader />
            <Text
            position={"relative"}
            top="-600px"
            left={{sm:, md:"160px", lg:"150px"}}
            fontSize="15pt"
            fontWeight={700}
            color={"gray.500"}
            >
              No Post Found Please log in
            </Text>
          </Flex>
        ) : (
          <Stack>
            {postStateValue.posts.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                onSelectPost={onSelectPost}
                onVote={onVote}
                onDeletePost={onDeletePost}
                userIsCreator={user?.uid === post.creatorId}
                userVoteValue={
                  postStateValue.postVotes.find(
                    (item) => item.postId === post.id
                  )?.voteValue
                }
                homePage
              />
            ))}
          </Stack>
        )}
      </>
      <Stack spacing={2}>
        <ProfileCommunities />
        <UserShow user={user} />
      </Stack>
    </IndexContentLayout>
  );
};
export default Index;
