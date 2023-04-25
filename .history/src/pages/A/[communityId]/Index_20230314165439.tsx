import { GetServerSideProps } from 'next';
import React from 'react';

type CommunityPageProps = {};

const CommunityPage: React.FC<CommunityPageProps> = () => {
	return <div>CommunityPage</div>;
};

export async function getServerSideProps(context:GetServerSideProps) {
	
}

export default CommunityPage;
