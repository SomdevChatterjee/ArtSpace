/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { useEffect } from 'react';
import { Community, communityState } from '../../../atoms/communitiesAtom';
import { firestore } from '../../../firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
import NotFound from '../../../components/Community/NotFound';
import Header from '../../../components/Community/Header';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import Posts from '../../../components/Posts/Posts';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';
import { useRecoilState } from 'recoil';
import About from '../../../components/Community/About';
type CommunityPageProps = {
	communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
	const [,setCommunityStateValue] = useRecoilState(communityState)
	useEffect(()=>{
		setCommunityStateValue(prev =>({
			...prev, 
			currentCommunity: communityData
		}))
	},[]);
	
	if (!communityData) {
		return (
				<NotFound />
			
		);
	}


	return (
		<>
			<Header communityData={communityData} />
			<IndexContentLayout>
				<>
				<CreatePostLink/>
				<Posts communityData={communityData}/>	
				</>
				<>
					<About communityData={communityData}/>
				</>
			</IndexContentLayout>
		</>
	);
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
				communityData: communityDoc.exists()
					? JSON.parse(
							safeJsonStringify({
								id: communityDoc.id,
								...communityDoc.data(),
							})
					  )
					: "",
			},
		};
	} catch (error) {
		console.log(error);
	}
}

export default CommunityPage;
