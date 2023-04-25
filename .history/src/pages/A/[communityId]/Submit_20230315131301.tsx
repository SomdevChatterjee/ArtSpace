import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import PageContent from '../../../components/Layouts/PageContent';

const Submit: React.FC = () => {
	return (
		<PageContent>
			<>
            <Box p={"14x 0px"} border={"1px solid"} >
                <Text>Create a post</Text>
            </Box>
            {/* new post form */}
            </>
		</PageContent>
	);
};
export default Submit;
