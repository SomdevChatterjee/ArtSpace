import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import IndexContentLayout from "../components/Layouts/IndexContentLayout";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";

const Home: NextPage = () => {

  const [user, loadingUser] = useAuthState(auth);

  const buildUserHomeFeed = () =>{};

  const buildNonUserHomeFeed = () =>{};
  
  const getUserPostVotes = () =>{};
  
  //useEffects

  useEffect(()=>{
    if()
  },[user, loadingUser])

  return (
    <IndexContentLayout>
      <>{/* <PostFeed/> */}</>
      <>{/* Recomendations  */}</>
    </IndexContentLayout>
  );
};

export default Home;
