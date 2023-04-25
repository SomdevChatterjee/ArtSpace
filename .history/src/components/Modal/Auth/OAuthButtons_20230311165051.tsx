import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import {useSignInWithGoogle } from "react-firebase-hooks/auth";
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