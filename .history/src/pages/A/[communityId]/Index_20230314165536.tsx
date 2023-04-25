import { GetServerSideProps } from 'next';
import React from 'react';
import { firestore } from '../../../firebase/clientApp';

type CommunityPageProps = {};

const CommunityPage: React.FC<CommunityPageProps> = () => {
	return <div>CommunityPage</div>;
};

export async function getServerSideProps(context:GetServerSideProps) {
	
	//get the community data

	try{
		const communityDocRef = doc(firestore, communities')
	}


}

export default CommunityPage;
