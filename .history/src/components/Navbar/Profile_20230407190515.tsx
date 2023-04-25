import { Flex, Icon } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import { CgProfile } from "react-icons/cg";

type ProfileProps = {
    user:User;
};

const Profile: React.FC<ProfileProps> = ({user}) => {
const [user]  = useAuth
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
