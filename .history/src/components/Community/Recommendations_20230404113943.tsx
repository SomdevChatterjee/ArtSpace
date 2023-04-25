import React, { useEffect, useState } from "react";
import { Community } from "../../atoms/communitiesAtom";
import { useCommunityData } from "../../hooks/useCommunityData";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/clientApp";
import { Flex } from "@chakra-ui/react";

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
      const communities = communityDocs.docs.map(docs =>({
        id:docs.id, 
        ...docs.data(),
      }));
      setCommunities(communities as Community[])
    } catch (error: any) {
      console.log("getCOmmunityRecommendations Error: ", error.message);
    }
  };
  setLoading(false);

  useEffect(() => {
    getCommunityRecommendations();
  }, []);

  return (
  <Flex direction="column" bg={"white"} borderRadius={4} border="1px solid" >
    <Flex></Flex>
    <Flex></Flex>
  </Flex>
  )
};
export default Recommendations;
