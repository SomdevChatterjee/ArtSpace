import { Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

type VideoProps = {
    
};

const Video:React.FC<VideoProps> = () => {
    const [value, setValue] = useState();

    const navigate =useRouter()
   
    const handleJoinRoom = useCallback(() => {
      navigate.push(`/room/${value}`)
    }, [navigate, value]);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.)
    }
    return (
        <>
        <div>
            <Input value={value} onChange={()=>{}}
            type="text" 
            placeholder="Enter Room Code" />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
    </>
    )
}
export default Video;