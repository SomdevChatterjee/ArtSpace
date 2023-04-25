import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons:React.FC = () => {
    
    return (
        <Flex direction={"column"} width={"100%"} mb>
            <Button> Continue with Google</Button>
        </Flex>
    );
}
export default OAuthButtons;