import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import { firestore } from '../../../firebase/clientApp';
import
type CommunityPageProps = {
	communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({communityData}) => {
	return <div>CommunityPage</div>;
};

export async function getServerSideProps(context:GetServerSidePropsContext) {
	
	//get the community data

	try{
		const communityDocRef = doc(firestore, 'communities', context.query.communityId as string)
		const communityDoc = await getDoc(communityDocRef);
		
		return{
			
			props:{
				communityData:communityDoc.data(),
			}
		}
		}catch(error){\
			console.log(error)

		}
	}


}

export default CommunityPage;