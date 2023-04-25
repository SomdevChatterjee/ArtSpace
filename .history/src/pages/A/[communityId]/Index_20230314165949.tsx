import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import { firestore } from '../../../firebase/clientApp';

type CommunityPageProps = {};

const CommunityPage: React.FC<CommunityPageProps> = () => {
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
			console.log

		}
	}


}

export default CommunityPage;
