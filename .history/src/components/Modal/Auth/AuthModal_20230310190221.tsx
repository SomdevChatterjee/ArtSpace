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
import {useRecoilState} from 'recoil'
import { authModalState } from '../../../atoms/authModalAtoms';

const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () =>{
        setModalState(prev =>({
            ...prev, 
            open:false,
        }));
    }
	return (
		<>
			<Modal isOpen={modalState.open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{Modal Title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>here is a modal</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;
