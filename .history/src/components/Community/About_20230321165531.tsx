import { Flex, Box, Text, Icon, Stack, Divider } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Community } from '../../atoms/communitiesAtom';

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
				width={"100%"}
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
                        <Flex  padding={2} fontSize="10pt" fontWeight={"700"}>
                            <Flex direction={"column"} flexGrow={1}>
							<Text color={"yellow.400"}>{communityData.numberOfMembers.toLocaleString()}</Text>
							<Text color={"yellow.600"} >Members</Text>
                            </Flex>
                            <Flex direction={"column"} flexGrow={1}>
								<Text>1</Text>
								<Text>Online</Text>
							</Flex>
                        </Flex>
						<Divider/>
                    </Stack>
                </Flex>
			</Flex>
		</Box>
	);
};
export default About;
