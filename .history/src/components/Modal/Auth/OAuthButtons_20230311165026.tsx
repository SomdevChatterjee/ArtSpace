import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import {} from ""
const OAuthButtons:React.FC = () => {
    
    return (
        <Flex direction={"column"} width={"100%"} mb={4}>
            <Button variant={'outline'}>
                <Image alt='' height={"30px"} src='images\googleLogo.png'/> 
                Continue with Google
            </Button>
        </Flex>
    );
}
export default OAuthButtons;