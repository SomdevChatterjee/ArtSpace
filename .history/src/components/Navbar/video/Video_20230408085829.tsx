import React from 'react';

type VideoProps = {
    
};

const Video:React.FC<VideoProps> = () => {
    
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