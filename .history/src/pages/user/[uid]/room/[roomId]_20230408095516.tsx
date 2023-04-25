import { Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useState, useParams } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/clientApp';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

type VideoProps = {
    
};

const Video:React.FC<VideoProps> = () => {
    const { roomId } = useParams();

    let myMeeting = async (element: HTMLDivElement) => {
    // generate token
    const token = await generateToken(
      'https://nextjs-token.vercel.app/api',
      userID
    );
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      1484647939,
      token,
      roomID,
      userID,
      userName
    );
    // create instance object from token
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.origin +
            window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
    return(<>        <div>
        <div ref={myMeeting} />
    </div></>);
}
export default Video;