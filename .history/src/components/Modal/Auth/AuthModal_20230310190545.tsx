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
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtoms';

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
					<ModalHeader>
						{modalState.view === 'login' && 'login'}
						{modalState.view === 'signup' && 'signup'}
						{modalState.view === 'resetPasword' && 'resetPasword'}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody display={"flex"} flexDirection="column" alignItems={"center"} justifyContent=>
                    
                    </ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;
