import React, { useCallback, useState } from 'react';

type VideoProps = {
    
};

const Video:React.FC<VideoProps> = () => {
    const [value, setValue] = useState();

    const navigate =
   
    const handleJoinRoom = useCallback(() => {
      navigate(`/room/${value}`)
    }, [navigate, value]);
    
    return (
        <>
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)}
            type="text" 
            placeholder="Enter Room Code" />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
    </>
    )
}
export default Video;