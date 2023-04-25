import { Button } from '@chakra-ui/react';
import React from 'react';
import { authModalState } from '../../../../atoms/authModalAtoms';
import {useSetRecoilState} from 'recoil'
const AuthButtons: React.FC = () => {
    const setModalState = useSetRecoilState(authModalState)
	return (
		<>
			<Button
				variant={'outline'}
				height="28px"
				display={{ base: 'none', sm: 'flex' }}
				width={{ base: '70px', md: '110px' }}
                mr={2}
                onClick={()=>{setModalState({open:true, view:"login"})}}
			>
				Log In
			</Button>
			<Button
				height="28px"
				display={{ base: 'none', sm: 'flex' }}
				width={{ base: '70px', md: '110px' }}
				mr={2}
                onClick = 
			>
				Sign Up
			</Button>
		</>
	);
};
export default AuthButtons;
