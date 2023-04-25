import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React from 'react';
import CreateCommunityModal from '../../../Modal/Auth/CreateCommunities/CreateCommunityModal';
import {GrAdd} from "react-icons/gr"
type CommunitiesProps = {
    
};

const Communities:React.FC<CommunitiesProps> = () => {
    
    return(
        <>
        <CreateCommunityModal/>
        <MenuItem>
        <Flex align={"center"}>
            <Icon as={GrAdd} fontSize={"1"}/>
            Create Community</Flex>
        </MenuItem>
        </>
    );
}
export default Communities;