import { ChevronDownIcon } from '@chakra-ui/icons';
import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Icon,
	Flex,
} from '@chakra-ui/react';
import { FaRedditSquare } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { IoSparkles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { User } from 'firebase/auth';
import React from 'react';

type UserMenuProps = {
	user?: User | null | undefined;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
	return (
		<>
			<Menu>
				<MenuButton cursor={"pointer"} padding={"0px 6px"}>
					{user ? (
						<Flex align={"center"}>
							<>
								<Icon
									as={ChevronDownIcon}
									mr={1}
									fontSize={'20pt'}
									color={'yellow.600'}
                                    borderRadius = {4}
                                    _hover={{outline:"1px solid", outlineColor:"yellow.200"}}
								/>
							</>

						</Flex>
					) : (
						<Icon as={VscAccount} fontSize="20pt"  color={"gray.400"} mr={1}/>
					)}
				</MenuButton>
				<MenuList>
					<MenuItem _hover={{color:"yellow.600", bg:"black", outline:""}}>
                    <Flex align={"center"} >
                        <Icon mr={2} as={CgProfile}/>
                        Profile
                    </Flex>
                    </MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};
export default UserMenu;
