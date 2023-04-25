import { Box, Flex, Icon, Image,Text } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';
import { FaReddit } from 'react-icons/fa';
type HeaderProps = {
	communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
	return (
		<>
			<Flex direction={'column'} width={'100%'} height={'146px'}>
				<Box width={'100%'} height="50%" bg="yellow.400" />
				<Flex justify={'center'} bg="white" flexGrow={1}>
					<Flex width={'95%'} maxWidth="860px" border={'1px solid black'}>
						{communityData.imageUrl?
                        <Image src='' alt=''/>
                        
                        :<Icon
							as={FaReddit}
							fontSize={'64'}
							position={'relative'}
							top={-3}
							color="yellow.500"
							border={'4px solid white'}
							borderRadius={'50%'}
						/>
                        }
                        <Flex padding={10px 16px}>
                            <Flex direction={"column"} mr={6}>
                                <Text fontWeight={800} fontSize={"24pt"} ml={2} color={"yellow.600"} >{communityData.id}</Text>
                                <Text fontWeight={800} fontSize={"10pt"} ml={2} color={"yellow.300"} >A/{communityData.id}</Text>
                            </Flex>
                        </Flex>

					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
export default Header;
