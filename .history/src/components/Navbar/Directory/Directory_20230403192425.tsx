import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text ,Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';
import { TiHome } from "react-icons/ti";
import Communities from './Communities';
const Directory: React.FC = () => {
	return (
		<>
			<Menu isOpen>
				<MenuButton
					cursor={'pointer'}
					padding={'0px 6px'}
					borderRadius={4}
                    ml={{base:"1", md:"2"}}
                    mr={{base:"2", md:"4"}}
				>
					<Flex align={'center'} justify={"space-between"} width={{base:"auto", lg:"200px"}}>
						<Flex align={'center'}>
                            <Icon fontSize={"20"} mr={{base:2, md:1}}  as={TiHome}
                            />
                            <Text display={{base:"none", md:"none", lg:"flex"}}>Home</Text>
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
				<MenuList>
                    <Communities/>
                </MenuList>
			</Menu>
		</>
	);
};
export default Directory;
