import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';
import { communityState } from '../../../atoms/communitiesAtom';
import About from '../../../components/Community/About';
import PageContent from '../../../components/Layouts/PageContent';
import NewPostForm from '../../../components/Posts/NewPostForm';
import { auth } from '../../../firebase/clientApp';
import { useCommunityData } from '../../../hooks/useCommunityData';

const Submit: React.FC = () => {
	const [user] = useAuthState(auth);
	const {communityStateValue} = useCommunityData()
	console.log("community", communityStateValue)
	return (
		<PageContent>
			<>
				<Box p={'14x 0px'} border={'1px solid'} borderColor={'white'}>
					<Text>Create a post</Text>
				</Box>
				{user && <NewPostForm user={user} />}
			</>
			<>{<About communityData={communityStateValue.currentCommunity}/>}</>
		</PageContent>
	);
};
export default Submit;
