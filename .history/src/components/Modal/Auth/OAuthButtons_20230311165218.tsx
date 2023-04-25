import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from '../../../firebase/clientApp';

const OAuthButtons:React.FC = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    return (
        <Flex direction={"column"} width={"100%"} mb={4}>
            <Button variant={'outline'} is>
                <Image alt='' height={"30px"} src='images\googleLogo.png'/> 
                Continue with Google
            </Button>
        </Flex>
    );
}
export default OAuthButtons;