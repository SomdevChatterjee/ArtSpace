import { ArrowUpIcon } from '@chakra-ui/icons';
import { Flex, Text, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import { BsFire } from 'react-icons/bs';
import { TiStarburst } from 'react-icons/ti';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';
import PostItem from '../../../components/Posts/PostItem';
import PostLoader from '../../../components/Posts/PostLoader';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
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