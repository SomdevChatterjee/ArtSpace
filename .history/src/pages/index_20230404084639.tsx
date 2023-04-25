import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import IndexContentLayout from "../components/Layouts/IndexContentLayout";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import usePosts from "../hooks/usePosts";

const Home: NextPage = () => {

  const [user, loadingUser] = useAuthState(auth);
  const { setPostStateValue } = usePosts();

  const [loading, setLoading] = useState(false);

  const buildUserHomeFeed = () =>{};

  const buildNonUserHomeFeed =async () =>{
    setLoading(true)
    try {
      const postQuery = query(collection(firestore, 'posts'), orderBy('votesStatus','desc'), limit(10)) 
      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map(item =>({id:item.id, ...item.data()}));

      //setPostState
      setPostStateValue(prev =>({
        ...prev,
        
      }))

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
