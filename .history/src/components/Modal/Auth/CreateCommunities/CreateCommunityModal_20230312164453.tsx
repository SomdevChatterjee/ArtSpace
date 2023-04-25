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
    Text,
    Input
} from '@chakra-ui/react';
import React, { useState } from 'react';

type CreateCommunitiesProps = {
	open: boolean;
	handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunitiesProps> = ({
	open,
	handleClose,
}) => {
    const [communityName, setCommunityName] = useState("");
	return (
		<>
			<Modal isOpen={open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create A Community</ModalHeader>
					<Box padding={6}>
						<ModalCloseButton />
						<ModalBody
							display={'flex'}
							flexDir={'column'}
							padding={'10px 0px'}
						>
							<Text fontWeight={"900"} fontSize={"16pt"}>Name</Text>
							<Text color={"yellow.700"} fontSize={"10pt"}>Community names must Include capitalization cannot be changed</Text>
                            <Text>
                                Art/
                            </Text>
                            <Input value={communityName} size={/>
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
