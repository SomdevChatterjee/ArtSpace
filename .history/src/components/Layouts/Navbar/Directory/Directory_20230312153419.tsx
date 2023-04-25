import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Flex, Icon, Menu,
    MenuButton, MenuList
} from '@chakra-ui/react';
import React from 'react';



const Directory: React.FC = () => {
   	return (
		<>
			<Menu>
				<MenuButton cursor={'pointer'} padding={'0px 6px'}>
						<Flex align={'center'}>
							<Flex>
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
                            </Flex>
				</MenuButton>
				<MenuList>
					
				</MenuList>
			</Menu>
		</>
	);
};
export default Directory;

