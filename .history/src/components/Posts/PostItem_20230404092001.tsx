import React, { useState } from "react";
import { Post } from "../../atoms/PostAtom";
import {
  Alert,
  AlertIcon,
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import moment from "moment";
type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: (
    event: React.MouseEvent<SVGElement>,
    post: Post,
    vote: number,
    communityId: string
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  onSelectPost?: (post: Post) => void;
  homePage?: boolean;
};

const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  onVote,
  onDeletePost,
  onSelectPost,
  userVoteValue,
  homePage,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const singlePostPage = !onSelectPost;
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleDelete = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setLoadingDelete(true);
    try {
      const success = await onDeletePost(post);
      if (!success) {
        throw new Error("Failed to delete Post");
      }

      console.log("the post was successfully deleted");
      if (singlePostPage) {
        router.push(`/A/${post.communityId}/Index`);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoadingDelete(false);
  };
  return (
    <Flex
      border={"1px solid"}
      bg={"yellow.50"}
      color={"yellow.600"}
      borderColor={singlePostPage ? "white" : "yellow.200"}
      borderRadius={singlePostPage ? "4px 4px 0px 0px " : "4px"}
      _hover={{ borderColor: singlePostPage ? "none" : "yellow.400" }}
      cursor={singlePostPage ? "unset" : "pointer"}
      onClick={() => {
        onSelectPost && onSelectPost(post);
      }}
    >
      <Flex
        direction={"column"}
        align={"center"}
        bg={singlePostPage ? "none" : "yellow.200"}
        width={"40px"}
        p={2}
        mr={1}
      >
        <Icon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={userVoteValue === 1 ? "brand.100" : "yellow.500"}
          fontSize={22}
          onClick={(event) => {
            onVote(event, post, 1, post.communityId);
          }}
          cursor={"pointer"}
        />
        <Text fontSize={"9pt"} color={"yellow.600"}>
          {post.votesStatus}
        </Text>
        <Icon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          color={userVoteValue === -1 ? "brand.100" : "yellow.500"}
          fontSize={22}
          onClick={(event) => {
            onVote(event, post, -1, post.communityId);
          }}
          cursor={"pointer"}
        />
      </Flex>
      <Flex direction={"column"} width={"100%"}>
        {error && (
          <>
            <Alert status="error">
              <AlertIcon />
              <Text mr={2} color={"gray.500"}>
                Error creating post
              </Text>
            </Alert>
          </>
        )}
        <Stack spacing={1} p="10px">
          <Stack
            direction={"row"}
            spacing={0.6}
            align="center"
            fontSize={"9pt"}
          >
            {/* home page check  */}
            {homePage && <>{post.communityImageUrl}</>}
            <Text>
              Posted By u/{post.creatorDisplayName}{" "}
              {moment(new Date(post.createAt?.seconds * 1000)).fromNow()}
            </Text>
          </Stack>
          <Text fontSize={"12pt"} fontWeight={600} color={"yellow.600"}>
            {post.title}
          </Text>
          <Text fontSize={"10pt"} color={"yellow.500"}>
            {post.body}
          </Text>
          {post.imageUrl && (
            <Flex justify={"center"} align="center" p={2}>
              {loadingImage && (
                <Skeleton height={"200px"} width="100%" borderRadius={4} />
              )}
              <Image
                src={post.imageUrl}
                alt="PostImage"
                maxHeight={"460px"}
                onLoad={() => setLoadingImage(false)}
              />
            </Flex>
          )}
        </Stack>
        <Flex direction={"row"} mb={0.5} color="yellow.400">
          <Flex
            align={"center"}
            padding={"8px 10px"}
            borderRadius={4}
            _hover={{ bg: "yellow.200" }}
            cursor={"pointer"}
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize={"9pt"}>{post.numberOfComments}</Text>
          </Flex>
          <Flex
            align={"center"}
            p={"8px 10px"}
            borderRadius={4}
            _hover={{ bg: "yellow.200" }}
            cursor={"pointer"}
          >
            <Icon as={IoArrowRedoOutline} mr={2} />
            <Text fontSize={"9pt"}>Share</Text>
          </Flex>
          <Flex
            align={"center"}
            p={"8px 10px"}
            borderRadius={4}
            _hover={{ bg: "yellow.200" }}
            cursor={"pointer"}
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize={"9pt"}>Save</Text>
          </Flex>
          {userIsCreator && (
            <Flex
              align={"center"}
              p={"8px 10px"}
              borderRadius={4}
              _hover={{ bg: "yellow.200" }}
              cursor={"pointer"}
              onClick={handleDelete}
            >
              {loadingDelete ? (
                <Spinner size="sm" />
              ) : (
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize={"9pt"}>Delete</Text>
                </>
              )}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PostItem;
