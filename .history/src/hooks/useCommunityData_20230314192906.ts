import React from 'react'
import { useRecoilState } from 'recoil';

const useCommunityData:React.FC = ()=>{
   const [communityStateValue, setCommunityStateValue] = useRecoilState(commui)
    return{
        communityStateValue
    };
    
}
export default useCommunityData