/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import IndexContentLayout from "../components/Layouts/IndexContentLayout";
import { MouseEvent, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import usePosts from "../hooks/usePosts";
import { Post } from "../atoms/PostAtom";
import PostLoader from "../components/Posts/PostLoader";
import { Stack } from "@chakra-ui/react";
import PostItem from "../components/Posts/PostItem";
import CreatePostLink from "../components/Community/CreatePostLink";
import { useRecoilValue } from "recoil";
import { communityState } from "../atoms/communitiesAtom";
import { useCommunityData } from "../hooks/useCommunityData";

const Home: NextPage = () => {
  const [user, loadingUser] = useAuthState(auth);
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onDeletePost,
    onSelectPost,
  } = usePosts();

  const [loading, setLoading] = useState(false);
  const { communityStateValue }= useCommunityData();

  const buildUserHomeFeed = async () => {
    setLoading(true);
    try {
      if (communityStateValue.mySnippets.length) {
        //get posts from the user communities
        const myCommunityIds = communityStateValue.mySnippets.map(
          (snippet) => snippet.communityId
        );
        const postQuery = query(
          collection(firestore, "posts"),
          where("communityId", "in", myCommunityIds),
          limit(10)
        );
        const postDocs = await getDocs(postQuery);
        const posts = postDocs.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setPostStateValue(prev =>({
          ...prev,
          posts:posts as Post[],
        }))
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
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        orderBy("votesStatus", "desc"),
        limit(10)
      );
      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      console.log("posts", posts);
      //setPostState
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error: any) {
      console.log("buildNonUserHome Error: ", error.message);
    }
    setLoading(false);
  };

  const getUserPostVotes = () => {};

  //useEffects

  useEffect(()=>{
    if(communityStateValue.snippetsFetched) buildUserHomeFeed();
  },[communityStateValue.snippetsFetched]);

  useEffect(() => {
    if (!user && !loadingUser) buildNonUserHomeFeed();
  }, [user, loadingUser]);

  useEffect(()=>{
    if(user && postStateValue.post)
  },[])
  return (
    <IndexContentLayout>
      <>
        <CreatePostLink />
        {loading ? (
          <PostLoader />
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
      <>{/* Recomendations  */}</>
    </IndexContentLayout>
  );
};

export default Home;
