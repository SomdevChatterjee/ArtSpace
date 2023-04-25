import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
    Text
} from '@chakra-ui/react';
import React from 'react';

type CreateCommunitiesProps = {
	open: boolean;
	handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunitiesProps> = ({
	open,
	handleClose,
}) => {
	return (
		<>
			<Modal isOpen={open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create A Community</ModalHeader>
					<Box pr={3}>
						<ModalCloseButton />
						<ModalBody
							display={'flex'}
							flexDir={'column'}
							padding={'10px 0px'}
							border={'1px solid'}
						>
							<Text fontWeight={"900"}>Name</Text>
						</ModalBody>
					</Box>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={handleClose}>
							Close
						</Button>
						<Button variant="ghost">Create Community</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default CreateCommunityModal;
