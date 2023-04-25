import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageContent from '../../../components/Layouts/PageContent';
import NewPostForm from '../../../components/Posts/NewPostForm';

const Submit: React.FC = () => {
    const [user] = useAuthState
	return (
		<PageContent>
				<Box p={'14x 0px'} border={'1px solid'} borderColor={'white'}>
					<Text>Create a post</Text>
				</Box>
				<NewPostForm />
				{/* <About/> */}
		</PageContent>
	);
};
export default Submit;
