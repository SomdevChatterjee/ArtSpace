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
    Text
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtoms';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal: React.FC = () => {
	const [modalState, setModalState] = useRecoilState(authModalState);

	const handleClose = () => {
		setModalState((prev) => ({
			...prev,
			open: false,
		}));
	};
	return (
		<>
			<Modal isOpen={modalState.open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign={"center"}>
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
                            <OAuthButtons/>
                            <Text color={"yellow.500"} fontWeight={"900"}>OR</Text>
                            <AuthInputs/>
                            {/* <ResetPassword/> */}
                        </Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;
