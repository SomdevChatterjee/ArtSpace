import { Flex, Box, Text, Icon, Stack, Divider, Button } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Community } from '../../atoms/communitiesAtom';
import { RiCakeLine } from 'react-icons/ri';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';
type AboutProps = {
	communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
	const selectDocs = async () =>{
		const postQuery = query(
			collection(firestore, 'posts'),
			where('communityId', '==', communityData.id),
			orderBy('createAt', 'desc')
		);
		const postDocs = await getDocs(postQuery);
		let c = 0
		const posts = postDocs.docs.map((item)=>{ c++});
	}
	const router = useRouter()
	return (
		<Box position={'sticky'} top={'14px'}>
			<Flex
				justify={'space-between'}
				align="center"
				bg={'yellow.400'}
				color="yellow.600"
				p={3}
				borderRadius="4px 4px 0px 0px"
				width={'100%'}
			>
				<Text fontWeight={800} fontSize={'10pt'}>
					About Community
				</Text>
				<Icon as={HiOutlineDotsHorizontal} />
			</Flex>
			<Flex>
				<Flex
					direction={'column'}
					bg="white"
					borderRadius={'0px 0px 4px 4px'}
					padding={3}
					width="100%"
				>
					<Stack>
						<Flex padding={2} fontSize="10pt" fontWeight={'700'}>
							<Flex direction={'column'} flexGrow={1}>
								<Text color={'yellow.400'}>
									{communityData.numberOfMembers.toLocaleString()}
								</Text>
								<Text color={'yellow.600'}>Members</Text>
							</Flex>
							<Flex direction={'column'} flexGrow={1}>
								<Text color={'yellow.400'}>{1}</Text>
								<Text color={'yellow.600'}>Online</Text>
							</Flex>
						</Flex>
						<Divider />
						<Flex
							align={'center'}
							width="100%"
							p={1}
							fontWeight="500"
							fontSize={'10pt'}
						>
							<Icon as={RiCakeLine} fontSize={18} mr={2} />
							
								
								{communityData.createdAt && (
									<Text>
									  Created{" "}
									  {moment(
										new Date(communityData.createdAt!.seconds * 1000)
									  ).format("MMM DD, YYYY")}
									</Text>
								  )}
						</Flex>
						{/* remember this part well  will be used in different videocall part as well*/}
						<Link href={`/A/${router.query.communityId}/Submit`}>
						<Button mt={3} height="30px" width={"100%"}>Create Post</Button>
						</Link>
					</Stack>
				</Flex>
			</Flex>
		</Box>
	);
};
export default About;
