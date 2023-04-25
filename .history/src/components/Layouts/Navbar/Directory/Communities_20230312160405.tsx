import { MenuItem } from '@chakra-ui/react';
import React from 'react';
import CreateCommunityModal from '../../../Modal/Auth/CreateCommunities/CreateCommunityModal';

type CommunitiesProps = {
    
};

const Communities:React.FC<CommunitiesProps> = () => {
    
    return(
        <>
        <CreateCommunityModal/>
        <MenuItem></MenuI>
        </>
    );
}
export default Communities;