import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';

type AboutProps = {
    communityData:Community;
};

const About:React.FC<AboutProps> = ({communityData}) => {
    
    return (<Box position={"sticky"} top>
         About
         </Box>);
}
export default About;