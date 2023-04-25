import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React from 'react';
import CreateCommunityModal from '../../../Modal/Auth/CreateCommunities/CreateCommunityModal';

type CommunitiesProps = {
    
};

const Communities:React.FC<CommunitiesProps> = () => {
    
    return(
        <>
        <CreateCommunityModal/>
        <MenuItem>
        <Flex>
            <Icon as={}/>
            Create Community</Flex>
        </MenuItem>
        </>
    );
}
export default Communities;