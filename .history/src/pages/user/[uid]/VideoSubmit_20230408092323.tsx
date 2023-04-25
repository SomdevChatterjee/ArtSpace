import { Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


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
        <div>
            <Input value={value}
            type="text" 
            placeholder="Enter Room Code" />
            <Button onClick={handleJoinRoom}>Join</Button>
        </div>

    </>
    )
}
export default Video;