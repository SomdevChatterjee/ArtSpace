import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';
import { FaReddit } from 'react-icons/fa';
import { useCommunityData } from '../../hooks/useCommunityData';
type HeaderProps = {
	communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
	const { communityStateValue, onJoinOrLeaveCommunity, loading } =
		useCommunityData();
	const isJoined = !!communityStateValue.mySnippets.find(
		(item) => item.communityId === communityData.id
	);
	return (
		<>
			<Flex direction={'column'} width={'100%'} height={'146px'}>
				<Box width={'100%'} height="50%" bg="yellow.400" />
				<Flex justify={'center'} bg="white" flexGrow={1}>
					<Flex width={'95%'} maxWidth="860px">
						{communityStateValue.currentCommunity? (
							<Image src="" alt="" />
						) : (
							<Icon
								as={FaReddit}
								fontSize={'64'}
								position={'relative'}
								top={-3}
								color="yellow.500"
								border={'4px solid white'}
								borderRadius={'50%'}
							/>
						)}
						<Flex padding={'10px 16px'}>
							<Flex direction={'column'} mr={6}>
								<Text
									fontWeight={800}
									fontSize={'24pt'}
									ml={2}
									color={'yellow.600'}
								>
									{communityData.id}
								</Text>
								<Text
									fontWeight={800}
									fontSize={'10pt'}
									ml={2}
									color={'yellow.300'}
								>
									A/{communityData.id}
								</Text>
							</Flex>
							<Button
								variant={isJoined ? 'outline' : 'solid'}
								height={'30px'}
								pr={6}
								pl={6}
								isLoading = {loading}
								onClick={() =>
									onJoinOrLeaveCommunity(communityData, isJoined)
								}
							>
								{isJoined ? 'Joined' : 'Join'}
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
export default Header;
