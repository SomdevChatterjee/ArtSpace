import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';

type AboutProps = {
    communityData:Community;
};

const About:React.FC<AboutProps> = ({communityData}) => {
    
    return (<Box position={"sticky"} top={"14px"}>
         <Flex justify={"space-between"} align="center" bg={"yellow.400"} color="yellow.600" p={}>

         </Flex>
         <Flex></Flex>
         </Box>);
}
export default About;