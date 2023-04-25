import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import IndexContentLayout from "../components/Layouts/IndexContentLayout";
import { useEffect } from "react";

const Home: NextPage = () => {
  const buildUserHomeFeed = () =>{};

  const buildNonUserHomeFeed = () =>{};
  
  const getUserPostVotes = () =>{};
  
  //useEffects

  useEffect(())

  return (
    <IndexContentLayout>
      <>{/* <PostFeed/> */}</>
      <>{/* Recomendations  */}</>
    </IndexContentLayout>
  );
};

export default Home;
