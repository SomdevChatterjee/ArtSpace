import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
// import RightContent from "./RightContent/RightContent";
// import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg={"white"} height ="44px" padding={"6px 12px"}>
    <Flex align={"center"}>
        <Image src={"images/Lo.svg"} width="70" height="30" alt = ""/>

        NAVBAR
    </Flex>
    </Flex>
  );
};
export default Navbar;