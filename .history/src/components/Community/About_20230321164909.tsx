import { Flex, Box, Text, Icon, Stack } from '@chakra-ui/react';
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
					>
                    <Stack>
                        <Flex width={"100%"} padding={2} fontSize="10pt">
                            <Flex direction={"column"} flexGrow={1}>
							<Text>{communityData.numberOfMembers.toLocaleString()}</Text>
                            </Flex>
                        <Flex width={"100%"} padding={2} fontSize="10pt">
                        </Flex>
                    </Stack>
                </Flex>
			</Flex>
		</Box>
	);
};
export default About;
