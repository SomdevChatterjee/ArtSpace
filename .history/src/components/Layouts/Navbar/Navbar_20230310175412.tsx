import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
// import RightContent from "./RightContent/RightContent";
// import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg={"white"} height ="44px" padding={"6px 12px"}>
    <Flex align={"center"}>
        <Image src="images/Logo.svg" alt="artspace" width={"30px"} height={"30px"} />
        <Image
          src="images/Artspace.svg"
          alt="artspace"
          height={"20px"}
          display = {{base:"none", md:"unset"}
        }
        />
    </Flex>
    {/* </directory/>
    <RightContent/> */}
    <SearchInput/>
    </Flex>
  );
};
export default Navbar;
