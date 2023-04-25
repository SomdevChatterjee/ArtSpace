import { Button, Input } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/clientApp";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { GetServerSidePropsContext } from "next";

type VideoProps = {};

const Video: React.FC<VideoProps> = () => {
    const [user] = useAuthState(auth)
    const router= useRouter();
  const { roomId } = router.query;
    console.log(roomId)

  const myMeeting = async (element: HTMLDivElement) => {
    const appID = 1375674580;
    const serverSecret = "828bd9dbb69c57cbee92d81b03bda52f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId as string,
      Date.now().toString(),
      user?.displayName || user?.email?.split['']
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://localhost:3001/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
      showRemoveUserButton: true,
      showTurnOffRemoteCameraButton: true,
      showTurnOffRemoteMicrophoneButton: true,
    });
  };
  return (
    <>
      {" "}
      <div>
        <div ref={myMeeting} />
      </div>
    </>
  );
};
export default Video;
