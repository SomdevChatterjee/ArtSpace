import React, { useEffect, useState } from 'react';
import { Community } from '../../atoms/communitiesAtom';

type RecommendationsProps = {
    
};

const Recommendations:React.FC<RecommendationsProps> = () => {
    const [communities, setCommunities] = useState<Community[]>([]);
    const [loading, setLoading] = useState(false)
    const 
    const getCommunityRecommendations =async () => {
        try {
            
        } catch (error:any) {
            console.log("getCOmmunityRecommendations Error: ", error.message)
        }
    }

    useEffect(()=>{
        getCommunityRecommendations();
    },[])

    return <div>Have a good coding</div>
}
export default Recommendations;