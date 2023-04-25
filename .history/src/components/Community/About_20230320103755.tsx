import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';

type AboutProps = {
    communityData:Community;
};

const About:React.FC<AboutProps> = ({communityData}) => {
    
    return (<Box posti>
         About
         </Box>);
}
export default About;