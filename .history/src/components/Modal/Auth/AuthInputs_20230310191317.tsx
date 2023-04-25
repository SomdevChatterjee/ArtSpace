import { Flex } from '@chakra-ui/react';
import React from 'react';
import { authModalState } from '../../../atoms/authModalAtoms';
import {usereciol} from 'recoil'
type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(authModalState)
    return (
        <Flex direction={"column"} align="center" width={"100%"} mt={4}>
            {}
            <login/>
            <SignUp/>
        </Flex>
    )
}
export default AuthInputs;