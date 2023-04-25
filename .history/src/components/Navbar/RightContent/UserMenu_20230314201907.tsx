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


import {useSetRecoilState} from "recoil"
import { authModalState } from '../../../atoms/authModalAtoms';
import { auth } from '../../../firebase/clientApp';
type UserMenuProps = {
	user?: User | null | undefined;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const setAuthModalState = useSetRecoilState(authModalState)
	const logout = async () => {
		await signOut(auth);
	}
	return (
		<>
			<Menu>
				<MenuButton cursor={'pointer'} padding={'0px 6px'}>
					{user ? (
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
                                <Flex direction={"column"} display={{base:"none", lg:"flex"}} fontSize={"8pt"} align={"flex-start"}>
                                    <Text fontWeight={"700"}>
                                    {user.displayName|| user.email?.split("@")[0]}
                                    </Text>
                                    <Flex>
                                        <Icon as={IoSparkles} color={"#0a050f"}/>
                                        <Text color={"gray.400"}>1 Karma</Text>
                                    </Flex>
                                </Flex>
							</>
						</Flex>
					) : (
						<Flex align={'center'}>
							<Icon
								as={VscAccount}
								fontSize="20pt"
								color={'gray.400'}
								mr={1}
							/>
						</Flex>
					)}
				</MenuButton>
				<MenuList>
					{user ? (
						<>
							<MenuItem
								fontWeight={'700'}
								_hover={{
									color: 'yellow.600',
									bg: 'black',
									borderRadius: '20px',
								}}
							>
								<Flex align={'center'}>
									<Icon mr={2} as={CgProfile} />
									Profile
								</Flex>
							</MenuItem>
							<MenuDivider />
							<MenuItem
								fontWeight={'700'}
								_hover={{
									color: 'yellow.600',
									bg: 'black',
									borderRadius: '20px',
								}}
								onClick={() => {
									signOut(auth);
								}}
							>
								<Flex align={'center'}>
									<Icon mr={2} as={MdOutlineLogin} />
									Log Out
								</Flex>
							</MenuItem>
						</>
					) : (
						<>
							<MenuItem
								fontWeight={'700'}
								_hover={{
									color: 'yellow.600',
									bg: 'black',
									borderRadius: '20px',
								}}
								onClick={() => {
									setAuthModalState({open:true, view:"login"});
								}}
							>
								<Flex align={'center'}>
									<Icon mr={2} as={MdOutlineLogin} />
									Log in/ Sign Up
								</Flex>
							</MenuItem>
						</>
					)}
				</MenuList>
			</Menu>
		</>
	);
};
export default UserMenu;

