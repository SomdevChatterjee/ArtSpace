import { Button } from '@chakra-ui/react';
import React from 'react';


const AuthButtons:React.FC= () => {
    
    return (
        <>
        <Button variant={"outline"} height="28px" display={{base:"none", sm:"flex"}} width={{}}>Log In</Button>
        <Button>Sign Up</Button>
        </>
    );
}
export default AuthButtons;