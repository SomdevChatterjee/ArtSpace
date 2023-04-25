import { Button, Flex, Image,Text } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook } from "react-firebase-hooks/auth";
import { auth } from '../../../firebase/clientApp';

const OAuthButtons:React.FC = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    return (
        <Flex direction={"column"} width={"100%"} mb={4}>
            <Button variant={'outline'} isLoading={loading} onClick={()=>{signInWithGoogle()}}>
                <Image alt='' height={"30px"} src='images\googleLogo.png'/> 
                Continue with Google
            </Button>
            <Button variant={'outline'} isLoading={loading} onClick={()=>{signInWithGoogle()}}>
                <Image alt='' height={"25px"} mr={2} src='images\facebook-logo.png'/> 
                Continue with Facebook
            </Button>
            {error && <Text>{error.message}</Text>}
        </Flex>
    );
}
export default OAuthButtons;