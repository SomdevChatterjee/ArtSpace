import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import PageContent from '../../../components/Layouts/PageContent';
import NewPostForm from '../../../components/Posts/NewPostForm';

const Submit: React.FC = () => {
    return (
        <>
            
        
                <Box p={"14x 0px"} border={"1px solid"} borderColor={"white"}>
                    <Text>Create a post</Text>
                </Box>
                <NewPostForm />
                {/* <About/> */}
            </>
            
       
    );
};
export default Submit;
