import { GetServerSideProps } from 'next';
import React from 'react';

type CommunityPageProps = {};

const CommunityPage: React.FC<CommunityPageProps> = () => {
	return <div>CommunityPage</div>;
};

export async function getServerSideProps(context:GetServerSideProps) {
	
	//get the community data

	try{
		const communityDocRef = <html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Document</title>
		</head>
		<body>
			
		</body>
		</html>
	}


}

export default CommunityPage;
