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
	Input,
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
    const [charsRemaing, setCharsRemaing] = 
	const [communityName, setCommunityName] = useState('');
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
							<Text fontWeight={'900'} fontSize={'16pt'}>
								Name
							</Text>
							<Text color={'yellow.700'} fontSize={'10pt'}>
								Community names must Include capitalization cannot be
								changed
							</Text>
							<Text
								position={'relative'}
								top="28px"
								left={'4px'}
								color={'gray.300'}
								width="20px"
							>
								A/
							</Text>
							<Input
								position={'relative'}
								value={communityName}
								size={'sm'}
								pl="22px"
								onChange={() => {}}
							/>
                            <Text>{21} Characters Remaining</Text>
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
