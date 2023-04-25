import { Flex, Box, Text, Icon, Stack, Divider } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Community } from '../../atoms/communitiesAtom';
import {RiCakeLine} from "react-icons/ri"
import moment from 'moment';
type AboutProps = {
	communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
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
								<Text color={'yellow.400'}>1</Text>
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
							<Icon as={RiCakeLine} fontSize={18} mr={2}/>
							<Text> Created {moment(newDate)}</Text>
						</Flex>
					</Stack>
				</Flex>
			</Flex>
		</Box>
	);
};
export default About;
