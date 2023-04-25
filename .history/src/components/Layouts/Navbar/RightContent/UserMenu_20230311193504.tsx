import { ChevronDownIcon } from '@chakra-ui/icons';
import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Icon,
} from '@chakra-ui/react';
import {FaRedditSquare} from "react-icons/fa"
import {VscAccount} from "react-icons/vsc"
import {IoSparkles} from "react-icons/io5"

import { User } from 'firebase/auth';
import React from 'react';

type UserMenuProps = {
	user?: User | null | undefined;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
	return (
		<>
			<Menu>
				<MenuButton>
					{user ? (
						<>
							<Icon  as={ChevronDownIcon} fontSize={'24pt'}/>
						</>
					) : (
						<div>no user</div>
					)}
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem>Create a Copy</MenuItem>
					<MenuItem>Mark as Draft</MenuItem>
					<MenuItem>Delete</MenuItem>
					<MenuItem>Attend a Workshop</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};
export default UserMenu;
