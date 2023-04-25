import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';

type HeaderProps = {
    communityData:Community
};

const Header:React.FC<HeaderProps> = ({ communityData }) => {
    
    return (<>
        <Flex direction={"column"} width={"100%"} height={"146px"}>
            HE
        </Flex>
    </>
    )
}
export default Header;