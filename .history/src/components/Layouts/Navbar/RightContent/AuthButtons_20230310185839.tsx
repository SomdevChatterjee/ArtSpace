import { Button } from '@chakra-ui/react';
import React from 'react';
import { authModalState } from '../../../../atoms/authModalAtoms';
import {} from ''
const AuthButtons: React.FC = () => {
    const [,setModalState] = useRecoilState(authModalState)
	return (
		<>
			<Button
				variant={'outline'}
				height="28px"
				display={{ base: 'none', sm: 'flex' }}
				width={{ base: '70px', md: '110px' }}
                mr={2}
                onClick={()=>{}}
			>
				Log In
			</Button>
			<Button
				height="28px"
				display={{ base: 'none', sm: 'flex' }}
				width={{ base: '70px', md: '110px' }}
				mr={2}
			>
				Sign Up
			</Button>
		</>
	);
};
export default AuthButtons;
