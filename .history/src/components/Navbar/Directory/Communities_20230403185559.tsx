import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaReddit } from "react-icons/fa";

import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { communityState } from "../../../atoms/communitiesAtom";
import CreateCommunityModal from "../../Modal/Auth/CreateCommunities/CreateCommunityModal";
import MenuListItem from "./MenuListItem";
type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  const mySnippets = useRecoilValue(communityState).mySnippets;
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="yellow.500">
          My Communities
        </Text>
      </Box>
      <MenuItem
        width={"100%"}
        fontSize={"10pt"}
        _hover={{ bg: "gray" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Flex align={"center"}>
          <Icon as={GrAdd} fontSize={"16"} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
      {mySnippets.map((snippet) => (
        <MenuListItem
			  key={snippet.communityId}
			  icon={FaReddit}
			  displayText={`A/${snippet.communityId}`} 
			  link={`/A/${snippet.communityId}`} 
			  iconColor={""}        />
      ))}
    </>
  );
};
export default Communities;
