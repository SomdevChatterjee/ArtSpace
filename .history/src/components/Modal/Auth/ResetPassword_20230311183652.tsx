import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';

type ResetPasswordProps = {
    
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return (
        <>
        <Flex>
            <Input type={"email"} placeholder={"email"}/>
        </Flex>
        </>
    );
}
export default ResetPassword;