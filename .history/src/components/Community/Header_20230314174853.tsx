import { Box, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../atoms/communitiesAtom';
import {FaReddit} from "react-icons/fa"
type HeaderProps = {
	communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
	return (
		<>
			<Flex direction={'column'} width={'100%'} height={'146px'}>
				<Box width={"100%"} height="50%" bg="yellow.400"/>
                <Flex justify={"center"} bg="whiteAlpha.400" flexGrow={1}>
                    <Flex width={"95%"} maxWidth="860px" border={"1px solid black"}>
                        <Icon as=FaReddit' />
                    </Flex>
                </Flex>
			</Flex>
		</>
	);
};
export default Header;
