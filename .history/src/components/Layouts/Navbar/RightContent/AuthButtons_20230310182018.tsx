import { Button } from '@chakra-ui/react';
import React from 'react';


const AuthButtons:React.FC= () => {
    
    return (
        <>
        <Button variant={"outline"} height="28">Log In</Button>
        <Button>Sign Up</Button>
        </>
    );
}
export default AuthButtons;