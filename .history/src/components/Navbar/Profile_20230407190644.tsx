import { Flex, Icon } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgProfile } from "react-icons/cg";
import { auth } from "../../firebase/clientApp";

type ProfileProps = {
};

const Profile: React.FC<ProfileProps> = () => {
const [user]  = useAuthState(auth)
const router = useRouter();
    const handleClick = () =>{
        if(user){
            router.push()
        }
    }
  return (
    <Flex
    padding={"10px"}
    ml={1}
      fontWeight={"700"}
      _hover={{
        color: "yellow.600",
        bg: "black",
        borderRadius: "20px",
      }}
    >
      <Flex align={"center"}>
        <Icon mr={2} as={CgProfile} />
        Profile
      </Flex>
    </Flex>
  );
};
export default Profile;
