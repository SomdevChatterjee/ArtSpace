import { Flex } from '@chakra-ui/react';
import React from 'react';
import { authModalState } from '../../../atoms/authModalAtoms';
import {useRecoilValue} from 'recoil'
type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(authModalState)
    return (
        <Flex direction={"column"} align="center" width={"100%"} mt={4}>
            {modalState.view = ""}
            <login/>
            <SignUp/>
        </Flex>
    )
}
export default AuthInputs;