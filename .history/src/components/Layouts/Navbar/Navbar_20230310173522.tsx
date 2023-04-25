import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
// import RightContent from "./RightContent/RightContent";
// import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg={"white"} height ="44px" padding={"6px 12px"}>
    <Flex align={"center"}>
        <Image src="images/Logo.svg" alt="artspace" width={"30"} height={"30"} />
        <Image
          src="images/Artspace.svg"
          alt="artspace"
          height={"20"}
          width = {"100"}
          
        />
    </Flex>
    </Flex>
  );
};
export default Navbar;
