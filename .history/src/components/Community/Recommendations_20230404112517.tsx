import React from 'react';

type RecommendationsProps = {
    
};

const Recommendations:React.FC<RecommendationsProps> = () => {
    const getCommunityRecommendations =async () => {
        try {
            
        } catch (error:any) {
            console.log("getCOmmunityRecommendations Error: ", error.message)
        }
    }

    useEffect(()=>{
        getCommunityRecommendations()
    },[])

    return <div>Have a good coding</div>
}
export default Recommendations;