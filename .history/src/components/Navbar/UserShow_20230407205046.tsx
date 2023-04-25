import { Flex, Text, Icon, Stack, Box, Button, Divider } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiCake } from "react-icons/bi";
import { IoSparkles } from "react-icons/io5";
import { auth } from "../../firebase/clientApp";

type UserShowProps = {
  user?: User | null | undefined;
};

const UserShow: React.FC<UserShowProps> = ({ user }) => {
    const handleClick = ()=>{
        const {communityId}
    }
  return (
    <>
      <Flex
        direction="column"
        bg={"white"}
        borderRadius={4}
        border="1px solid"
        borderColor={"yellow.300"}
      >
        <Flex
        direction={"column"}
          align={"flex-top"}
          justify={"flex-end"}
          color={"white"}
          padding={"6px 10px"}
          height={"70px"}
          borderRadius={"4px 4px 0px 0px"}
          bgColor={"yellow.500"}
          bgImage={"url(images/Artspace.svg)"}
          backgroundSize={"cover"}
        >
          {user?.displayName || user?.email?.split("@")[0]}
        </Flex>
        <Flex direction={"column"} align={"center"} justify={"center"} bg={"white"} height={"120px"} borderRadius={"0px 0px 4px 4px"}>
            <Flex direction={"column"} align={"center"} justify={"center"} width={"50%"} p={2}>
            <Text color={"gray.400"}>1 Karma</Text>
            <Icon as={IoSparkles} color={"#0a050f"}/>
            </Flex>
            <Divider/>
            <Button mt={2} variant={"solid"} onClick={()=>{}}>Create New Post</Button>
        </Flex>
      </Flex>
    </>
  );
};
export default UserShow;
