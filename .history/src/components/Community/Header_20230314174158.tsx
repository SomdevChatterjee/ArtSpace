import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';

type HeaderProps = {
    communityData:Community
};

const Header:React.FC<HeaderProps> = ({ communityData }) => {
    
    return (<>
        <Flex direction={"column"} >

        </Flex>
    </>
    )
}
export default Header;