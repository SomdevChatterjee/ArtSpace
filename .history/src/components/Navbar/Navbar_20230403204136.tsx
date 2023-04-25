import { Flex, Icon, Image,Text } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaReddit } from 'react-icons/fa';
import { defaultMenuItem } from '../../atoms/directoryMenuAtom';
import { auth } from '../../firebase/clientApp';
import useDirectory from '../../hooks/useDirectory';
import Directory from './Directory/Directory';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';
// import RightContent from "./RightContent/RightContent";
// import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
	const [user, loading, error] = useAuthState(auth);
	const {onSelecteMenuItem} = useDirectory();
	return (
		<Flex bg={'white'} height="44px" padding={'6px 12px'} justify={{md:"space-between"}}>
			<Flex align={'center'} width={{base:"40px", md:"auto"}} mr={{base:0, md:2}}>
				{<Icon
					as={FaReddit}
					width={'30px'}
					height={'30px'}
					cursor={"pointer"}
					onClick ={() => onSelecteMenuItem(defaultMenuItem)}
				/>}
				<Text
					height={'20px'}
					display={{ base: 'none', md: 'unset' }}
					mr={6}
					
				>ArtSpace</Text>
			</Flex>
			{user && <Directory/>}
			<SearchInput user = {user} />
            <RightContent user = {user} />
		</Flex>
	);
};
export default Navbar;
