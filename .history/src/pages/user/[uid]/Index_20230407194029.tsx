import { ArrowUpIcon } from '@chakra-ui/icons';
import { Flex, Text, Icon, Stack } from '@chakra-ui/react';
import { query, collection, where, limit, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFire } from 'react-icons/bs';
import { TiStarburst } from 'react-icons/ti';
import { Post } from '../../../atoms/PostAtom';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';
import PostItem from '../../../components/Posts/PostItem';
import PostLoader from '../../../components/Posts/PostLoader';
import { auth, firestore } from '../../../firebase/clientApp';
import { useCommunityData } from '../../../hooks/useCommunityData';
import usePosts from '../../../hooks/usePosts';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
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
          const creatorIds = postStateValue.posts.map(
            (item) => item.creatorId
          );
          const postQuery = query(
            collection(firestore, "posts"),
            where("creatorId", "in",creatorIds),
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
          
        }
      } catch (error: any) {
        console.log("buildUserHomeFeed Error: ", error.message);
      }
      setLoading(false);
    };
    useFocusEffect(()=>{})
    return (<IndexContentLayout>
    <>
     <Flex width={"100%"} bg={"white"} padding="10px" borderRadius={"5px"} align="center" justify={"flex-start"} height="50px">
        <Flex mr={2} color={"blackAlpha.500"} _hover={{borderRadius:"20px", bg:"gray",padding:"6px", color:"yellow.500"}}>
        <Icon as={TiStarburst} mr={1}/>
        <Text fontWeight={700} color={"blackAlpha.500"} _hover={{color:"yellow.500"}}>New</Text>

        </Flex>
        <Flex mr={2} color={"blackAlpha.500"} _hover={{borderRadius:"20px", bg:"gray",padding:"6px", color:"yellow.500"}}>
        <Icon as={BsFire} mr={1}/>
        <Text fontWeight={700}>Hot</Text>

        </Flex>
        <Flex mr={2} color={"blackAlpha.500"} _hover={{borderRadius:"20px", bg:"gray",padding:"6px", color:"yellow.500"}}>
        <Icon as={ArrowUpIcon} fontSize={"15pt"} mr={1}/>
        <Text fontWeight={700}>Top</Text>
        </Flex>
     </Flex>
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
    <> </>
  </IndexContentLayout>);
}
export default Index;