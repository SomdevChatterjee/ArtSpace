import { Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/clientApp';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

type VideoProps = {
    
};

const Video:React.FC<VideoProps> = () => {
    const { roomId } = useParams();

    const myMeeting = async (element:HTMLDivElement) => {
        const appID = 1375674580;
        const serverSecret = "828bd9dbb69c57cbee92d81b03bda52f";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret,
             roomId,
              Date.now().toString(),
               "Somdev Chatterjee"
               );
               const zc = ZegoUIKitPrebuilt.create(kitToken); 
               zc.joinRoom({
                container: element, 
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url:`https://localhost:3001/room/${roomId}`
                    }
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
                
                
               })
    };
    return(<>        <div>
        <div ref={myMeeting} />
    </div></>);
}
export default Video;