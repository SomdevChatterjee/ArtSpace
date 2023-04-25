/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import IndexContentLayout from "../components/Layouts/IndexContentLayout";
import { MouseEvent, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import usePosts from "../hooks/usePosts";
import { Post } from "../atoms/PostAtom";
import PostLoader from "../components/Posts/PostLoader";
import { Stack } from "@chakra-ui/react";
import PostItem from "../components/Posts/PostItem";
import CreatePostLink from "../components/Community/CreatePostLink";

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

  const buildUserHomeFeed = () => {};

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

      //setPostState
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error: any) {
      console.log("buildNonUserHome Error: ", error.message);
    }
  };

  const getUserPostVotes = () => {};

  //useEffects

  useEffect(() => {
    if (!user && !loadingUser) buildNonUserHomeFeed();
  }, [user, loadingUser]);

  return (
    <IndexContentLayout>
      <>
        <CreatePostLink />
        {loading ? (
          <PostLoader />
        ) : (
          <>
            <Stack>
              {postStateValue.posts.map((post) => (
                <PostItem
                  key={post.id}
                  post={post}
                  onSelectPost={onSelectPost}
                  onVote={onVote}
                  onDeletePost={onDeletePost} 
                  userIsCreator={false}
                  userVoteValue={post}                
                  />
              ))}
            </Stack>
          </>
        )}
      </>
      <>{/* Recomendations  */}</>
    </IndexContentLayout>
  );
};

export default Home;