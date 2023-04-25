import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import PageContent from '../../../components/Layouts/PageContent';
import NewPostForm from '../../../components/Posts/NewPostForm';

const Submit: React.FC = () => {
	return (
		<PageContent>
			<>
            <Box p={"14x 0px"} border={"1px solid"} borderColor={"white"}>
                <></>
            </Box>
            <NewPostForm/>
            </>
            {/* <About/> */}
		</PageContent>
	);
};
export default Submit;
