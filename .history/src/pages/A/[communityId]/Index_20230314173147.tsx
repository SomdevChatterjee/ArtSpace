import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import { Community } from '../../../atoms/communitiesAtom';
import { firestore } from '../../../firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
type CommunityPageProps = {
	communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
	if (!communityData) {
		return <div> community Does not exists</div>;
	}
	return <div>Welcome to {communityData.id} community</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	//get the community data

	try {
		const communityDocRef = doc(
			firestore,
			'communities',
			context.query.communityId as string
		);
		const communityDoc = await getDoc(communityDocRef);

		return {
			props: {
				communityData:communityDoc.exists() ? JSON.parse(
					safeJsonStringify({
						id: communityDoc.id,...communityDoc.data(),}):"",
				),
			},
		};
	} catch (error) {
		console.log(error);
	}
}

export default CommunityPage;
