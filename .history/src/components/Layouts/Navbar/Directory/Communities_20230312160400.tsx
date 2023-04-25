import React from 'react';
import CreateCommunityModal from '../../../Modal/Auth/CreateCommunities/CreateCommunityModal';

type CommunitiesProps = {
    
};

const Communities:React.FC<CommunitiesProps> = () => {
    
    return(
        <>
        <CreateCommunityModal/>
        <Meu></Meu>
        </>
    );
}
export default Communities;