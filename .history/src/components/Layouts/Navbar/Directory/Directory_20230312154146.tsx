import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text ,Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';
import { TiHome } from "react-icons/ti";
const Directory: React.FC = () => {
	return (
		<>
			<Menu>
				<MenuButton
					cursor={'pointer'}
					padding={'0px 6px'}
					borderRadius={4}
				>
					<Flex align={'center'}>
						<Flex align={'center'}>
                            <Icon fontSize={"20"} mr  as={TiHome}
                            />
                            <Text display={{base:"none", md:"flex"}}>Home</Text>
                        </Flex>
						<Icon
							as={ChevronDownIcon}
							mr={1}
							fontSize={'20pt'}
							color={'yellow.600'}
							borderRadius={4}
							_hover={{
								outline: '1px solid',
								outlineColor: 'yellow.200',
							}}
						/>
					</Flex>
				</MenuButton>
				<MenuList></MenuList>
			</Menu>
		</>
	);
};
export default Directory;
