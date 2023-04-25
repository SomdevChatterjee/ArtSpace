import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import IndexContentLayout from "../components/Layouts/IndexContentLayout";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { collection } from "firebase/firestore";

const Home: NextPage = () => {

  const [user, loadingUser] = useAuthState(auth);

  const [loading, setLoading] = useState(false);

  const buildUserHomeFeed = () =>{};

  const buildNonUserHomeFeed = () =>{
    setLoading(true)
    try {
      const postQuery = query(collection(firestore, 'posts')) 
    } catch (error:any) {
      console.log("buildNonUserHome Error: ", error.message)
    }
  };
  
  const getUserPostVotes = () =>{};
  
  //useEffects

  useEffect(()=>{
    
    if(!user && !loadingUser) buildNonUserHomeFeed();

  },[user, loadingUser]);

  return (
    <IndexContentLayout>
      <>{/* <PostFeed/> */}</>
      <>{/* Recomendations  */}</>
    </IndexContentLayout>
  );
};

export default Home;
