import { Flex } from '@chakra-ui/react';
import React from 'react';

type UserShowProps = {
    
};

const UserShow:React.FC<UserShowProps> = () => {
    const [user] = useAuthState()
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
        align={"flex-end"}
        color={"white"}
        padding={"6px 10px"}
        height={"70px"}
        borderRadius={"4px 4px 0px 0px"}
        bgColor={"yellow.500"}
        bgImage={"url(images/Artspace.svg)"}
        backgroundSize={"cover"}
      >
        {}
        </Flex></Flex>
        </>);
}
export default UserShow;