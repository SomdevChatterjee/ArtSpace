import { Flex } from '@chakra-ui/react';
import React from 'react';

type RightContentProps = {
    // user:any;
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return (
        <>
        {/* <AuthModal/> */}
        <Flex>
            <AuthButttons/></>
        </Flex>
        </>
    );
}
export default RightContent;