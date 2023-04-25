import { Button, Flex, Image,Text } from '@chakra-ui/react';
import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook } from "react-firebase-hooks/auth";
import { auth, firestore } from '../../../firebase/clientApp';

const OAuthButtons:React.FC = () => {

    const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, User, Loading, Error] = useSignInWithFacebook(auth);
    const createUserDocument = async () =>{
        const userDocRef = doc(firestore,)
        await setDoc()
    }
    return (
        <Flex direction={"column"} width={"100%"} mb={4}>
            <Button variant={'outline'} isLoading={loading} onClick={()=>{signInWithGoogle()}}>
                <Image alt='' height={"30px"} src='images\googleLogo.png'/> 
                Continue with Google
            </Button>
            <Button variant={'outline'} isLoading={Loading} onClick={()=>{signInWithFacebook()}}>
                <Image alt='' height={"25px"} mr={2} src='images\facebook-logo.png'/> 
                Continue with Facebook
            </Button>
            {error && <Text>{error.message}</Text>}
        </Flex>
    );
}
export default OAuthButtons;