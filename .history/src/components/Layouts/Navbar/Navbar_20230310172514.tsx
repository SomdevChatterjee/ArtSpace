import { Flex, Image } from "@chakra-ui/react";
import React from "react";
// import RightContent from "./RightContent/RightContent";
// import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="66px" padding={"6px 0px"}>
      <Flex align={"center"} padding={"0px 10px"}>
        <Image src="images/Logo.svg" alt="artspace" height={"30px"} />
        <Image
          src=""
          alt="artspace"
          height={"20px"}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {/* <Directory /> */}
      {/* <SearchInput />
      <RightContent />  */}
    </Flex>
  );
};
export default Navbar;
