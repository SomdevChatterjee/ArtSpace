import { ChevronDownIcon } from '@chakra-ui/icons';
import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Icon,
	Flex,
	MenuDivider,
    Text
} from '@chakra-ui/react';
import { VscAccount } from 'react-icons/vsc';
import { IoSparkles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogin } from 'react-icons/md';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../../firebase/clientApp';
import { AuthModalState, authModalState } from '../../../../atoms/authModalAtoms';
import {useSetRecoilState} from "recoil"
type UserMenuProps = {
	user?: User | null | undefined;
};

const Directory: React.FC<UserMenuProps> = ({ user }) => {
    const setAuthModalState = useSetRecoilState(authModalState)
	return (
		<>
			<Menu>
				<MenuButton cursor={'pointer'} padding={'0px 6px'}>
					
						<Flex align={'center'}>
							<>
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
                                
				</MenuButton>
				<MenuList>
					
				</MenuList>
			</Menu>
		</>
	);
};
export default Directory;

