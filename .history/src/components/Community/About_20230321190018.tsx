/* eslint-disable react-hooks/exhaustive-deps */
import {
  Flex,
  Box,
  Text,
  Icon,
  Stack,
  Divider,
  Button,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Community } from "../../atoms/communitiesAtom";
import { RiCakeLine } from "react-icons/ri";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import useSelectedFile from "../../hooks/useSelectedFile";
import { BsReddit } from "react-icons/bs";
type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  const selecteFileRef = useRef<string>(null);
  const { selectedFile, setSelectedFile, onSelectFile } = useSelectedFile();
  const [documentsLength, setDocumentsLength] = useState(0);
  const [uploadingImage, setUploadingImage] = useState(false)
  const numberOfPosts = async () => {
    while (true) {
      const postQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id)
      );
      const postDocs = await getDocs(postQuery);
      const postsNumber = postDocs.docs.length;
      console.log(postsNumber);
      setDocumentsLength(postsNumber);
    }
  };
  useEffect(() => {
    numberOfPosts();
  }, []);
  const router = useRouter();
  const [user] = useAuthState(auth);
  return (
    <Box position={"sticky"} top={"14px"}>
      <Flex
        justify={"space-between"}
        align="center"
        bg={"yellow.400"}
        color="yellow.600"
        p={3}
        borderRadius="4px 4px 0px 0px"
        width={"100%"}
      >
        <Text fontWeight={800} fontSize={"10pt"}>
          About Community
        </Text>
        <Icon as={HiOutlineDotsHorizontal} />
      </Flex>
      <Flex>
        <Flex
          direction={"column"}
          bg="white"
          borderRadius={"0px 0px 4px 4px"}
          padding={3}
          width="100%"
        >
          <Stack>
            <Flex padding={2} fontSize="10pt" fontWeight={"700"}>
              <Flex direction={"column"} flexGrow={1}>
                <Text color={"yellow.400"}>
                  {communityData.numberOfMembers.toLocaleString()}
                </Text>
                <Text color={"yellow.600"}>Members</Text>
              </Flex>
              <Flex direction={"column"} flexGrow={1}>
                <Text color={"yellow.400"}>{documentsLength}</Text>
                <Text color={"yellow.600"}>Posts</Text>
              </Flex>
            </Flex>
            <Divider />
            <Flex
              align={"center"}
              width="100%"
              p={1}
              fontWeight="500"
              fontSize={"10pt"}
            >
              <Icon as={RiCakeLine} fontSize={18} mr={2} />

              {communityData.createdAt && (
                <Text>
                  Created{" "}
                  {moment(
                    new Date(communityData.createdAt!.seconds * 1000)
                  ).format("MMM DD, YYYY")}
                </Text>
              )}
            </Flex>
            {/* remember this part well  will be used in different videocall part as well*/}
            <Link href={`/A/${router.query.communityId}/Submit`}>
              <Button mt={3} height="30px" width={"100%"}>
                Create Post
              </Button>
            </Link>
            {user?.uid === communityData.creator_Id && (
              <>
                <Divider />
                <Stack spacing={1} fontSize="10pt">
                  <Text fontWeight={600}>Admin</Text>
                  <Flex align={"center"} justify="space-between">
                    <Text
                      color={"yellow.600"}
                      cursor="pointer"
                      _hover={{ textDecoration: "underline" }}
                      onClick={() => {}}
                    >
                      Change Image
                    </Text>
                    {communityData.imageUrl || selectedFile ? (
                      <Image
                        src={selectedFile || communityData.imageUrl}
                        alt=""
                        borderRadius={4}
                        boxSize="40px"
                      />
                    ) : (
                      <Icon
                        as={BsReddit}
                        fontSize={40}
                        color={"yellow.600"}
                        mr={2}
                      />
                    )}
                  </Flex>
                  {selectedFile && (
                    {uploadingImage?}
                  )}
                </Stack>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default About;
