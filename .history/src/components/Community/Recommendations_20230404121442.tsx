import React, { useEffect, useState } from "react";
import { Community } from "../../atoms/communitiesAtom";
import { useCommunityData } from "../../hooks/useCommunityData";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../firebase/clientApp";
import { Flex, Skeleton, SkeletonCircle, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

type RecommendationsProps = {};

const Recommendations: React.FC<RecommendationsProps> = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(false);
  const { communityStateValue, onJoinOrLeaveCommunity } = useCommunityData();
  const getCommunityRecommendations = async () => {
    setLoading(true);
    try {
      const communityQuery = query(
        collection(firestore, "communities"),
        orderBy("numberOfMembers", "desc"),
        limit(5)
      );
      const communityDocs = await getDocs(communityQuery);
      const communities = communityDocs.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));
      setCommunities(communities as Community[]);
    } catch (error: any) {
      console.log("getCOmmunityRecommendations Error: ", error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCommunityRecommendations();
  }, []);

  return (
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
        Top Comunities
      </Flex>
      <Flex direction={"column"}>
        {loading ? (
          <Stack mt={2} p={3}>
            <Flex justify="space-between" align="center">
              <SkeletonCircle size="10" />
              <Skeleton height="10px" width="70%" />
            </Flex>
            <Flex justify="space-between" align="center">
              <SkeletonCircle size="10" />
              <Skeleton height="10px" width="70%" />
            </Flex>
            <Flex justify="space-between" align="center">
              <SkeletonCircle size="10" />
              <Skeleton height="10px" width="70%" />
            </Flex>
          </Stack>
        ) : (
          <>
            {communities.map((item, index) => {
              const isJoined = communityStateValue.mySnippets.find(
                (snippet) => snippet.communityId === item.id
              );
              return (
                <Link key={item.id} href={`/A/${item.id}`}>
                  <Flex
                    align={"center"}
                    fontSize={"10pt"}
                    borderBottom="1px solid"
                    borderColor={"yellow.200"}
                    padding={"10px 12px"}
                  >
                    <Flex width={"80%"} align={"center"}>
                        <Flex>
                            <Text>{index + 1}</Text>
                        </Flex>
                        <Flex></Flex>
                    </Flex>
                  </Flex>
                </Link>
              );
            })}
          </>
        )}
      </Flex>
    </Flex>
  );
};
export default Recommendations;
