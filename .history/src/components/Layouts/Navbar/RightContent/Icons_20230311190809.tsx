import React from 'react';
import { BsArrowRightCircle, BsChatDots } from 'react-icons/bs';
import {
	IoFilterCircleOutline,
	IoNotificationsCircleOutline,
	IoVideocamOutline,
} from 'react-icons/io5';
import { GrAdd } from 'react-icons/gr';
import { Flex, Icon } from '@chakra-ui/react';
type IconsProps = {};

const Icons: React.FC<IconsProps> = () => {
	return (
		<Flex>
			<Flex
				display={{ base: 'none', md: 'flex' }}
				align="center"
				borderRight={'1px solid'}
				borderColor="red"
			><Flex>
                
            </Flex>
				<Icon as={BsArrowRightCircle} />
			</Flex>
			<></>
		</Flex>
	);
};
export default Icons;
