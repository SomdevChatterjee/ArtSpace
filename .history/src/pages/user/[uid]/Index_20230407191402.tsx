import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return <IndexContentLayout>
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
    <><Recommendations/> </>
  </IndexContentLayout>
);
}
export default Index;