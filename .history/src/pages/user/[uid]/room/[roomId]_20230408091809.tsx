import { Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/clientApp';

type VideoProps = {
    
};

const Video:React.FC<VideoProps> = () => {
    const [] = useAuthState(auth)
    const [value, setValue] = useState();

    const navigate =useRouter()
   
    const handleJoinRoom = useCallback(() => {
      navigate.push(`/user/${user.uid}/room/${value}`)
    }, [navigate, value]);
    return (
        <>
        <div>
            <Input value={value}
            type="text" 
            placeholder="Enter Room Code" />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
    </>
    )
}
export default Video;