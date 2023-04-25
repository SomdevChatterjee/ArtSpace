import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import AuthModal from '../../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';

type RightContentProps = {
    user:any;
};

const RightContent:React.FC<RightContentProps> = ({ user }) => {
    
    return (
        <>
        <AuthModal/>
        <Flex justify={"center"} align={"center"}>
            {user ?<Button onClick={()=>{}}>LogOut</Button> :<AuthButtons/>}
        </Flex>
        </>
    );
}
export default RightContent;