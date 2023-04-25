import React, { useEffect, useState } from 'react';
import { Community } from '../../atoms/communitiesAtom';
import { useCommunityData } from '../../hooks/useCommunityData';

type RecommendationsProps = {
    
};

const Recommendations:React.FC<RecommendationsProps> = () => {
    const [communities, setCommunities] = useState<Community[]>([]);
    const [loading, setLoading] = useState(false);
    const {communityStateValue, onJoinOrLeaveCommunity} = useCommunityData();
    const getCommunityRecommendations =async () => {
        setLoading(true)
        try {
            const communityQuery = 
        } catch (error:any) {
            console.log("getCOmmunityRecommendations Error: ", error.message)
        }
    }
    setLoading(false)

    useEffect(()=>{
        getCommunityRecommendations();
    },[])

    return <div>Have a good coding</div>
}
export default Recommendations;