/* eslint-disable react-hooks/exhaustive-deps */
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Flex,
	Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtoms';
import { auth } from '../../../firebase/clientApp';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal: React.FC = () => {
	const [modalState, setModalState] = useRecoilState(authModalState);
	const [user, loading, error] = useAuthState(auth);
	const handleClose = () => {
		setModalState((prev) => ({
			...prev,
			open: false,
		}));
	};
	
	useEffect(()=>{
		if(user != null) handleClose();
		console.log(user);
		
	}, [user]);

	return (
		<>
			<Modal isOpen={modalState.open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign={'center'}>
						{modalState.view === 'login' && 'login'}
						{modalState.view === 'signup' && 'signup'}
						{modalState.view === 'resetPasword' && 'resetPasword'}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						display={'flex'}
						flexDirection="column"
						alignItems={'center'}
						justifyContent={'center'}
					>
						<Flex
							direction={'column'}
							align="center"
							justify={'center'}
							width="70%"
						>
							{modalState.view === 'login' || modalState.view === 'signup'?{
								<>
							}:
							<resetPassword/>
							}

							{/* <ResetPassword/> */}
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;