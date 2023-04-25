import { Button, Flex, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';


type VideoProps = {
    
};

const Video:React.FC<VideoProps> = () => {
    const [user] = useAuthState(auth)
    const [value, setValue] = useState();

    const navigate =useRouter()
   
    const handleJoinRoom = useCallback(() => {
      navigate.push(`/user/${user?.uid}/room/${value}`)
    }, [navigate, value]);
    return (
        <>
        <Flex mr={""}justify="center" direction={"column"} align="center">
            <Input value={value}
            type="text" 
            placeholder="Enter Room Code" />
            <Button width={"100px"} onClick={handleJoinRoom}>Join</Button>
        </Flex>

    </>
    )
}
export default Video;