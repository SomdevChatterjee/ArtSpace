import { Flex } from '@chakra-ui/react';
import React from 'react';

type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    
    return (
        <Flex>
            <login/>
            <Signup/>
        </Flex>
    )
}
export default AuthInputs;