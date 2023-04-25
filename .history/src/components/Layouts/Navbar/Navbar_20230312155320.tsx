import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import Directory from './Directory/Directory';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';
// import RightContent from "./RightContent/RightContent";
// import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
	const [user, loading, error] = useAuthState(auth);
	return (
		<Flex bg={'white'} height="44px" padding={'6px 12px'} justify={}>
			<Flex align={'center'}>
				<Image
					src="images/Logo.svg"
					alt="artspace"
					width={'30px'}
					height={'30px'}
				/>
				<Image
					src="images/Artspace.svg"
					alt="artspace"
					height={'20px'}
					display={{ base: 'none', md: 'unset' }}
					mr={6}
				/>
			</Flex>
			{user && <Directory/>}
			<SearchInput user = {user} />
            <RightContent user = {user} />
		</Flex>
	);
};
export default Navbar;
