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
	Stack,
	Checkbox,
	Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {} from 
type CreateCommunitiesProps = {
	open: boolean;
	handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunitiesProps> = ({
	open,
	handleClose,
}) => {
	const [charsRemaing, setCharsRemaing] = useState(21);
	const [communityName, setCommunityName] = useState('');
	const [communityType, setCommunityType] = useState('Public');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length > 21) return;
		setCommunityName(event.target.value);
		//recalculate how many characters remaining
		setCharsRemaing(21 - event.target.value.length);
	};

	const onCommunityTypeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setCommunityType(event.target.name);
	};
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
								onChange={handleChange}
							/>
							<Text
								color={charsRemaing !== 0 ? 'green.400' : 'red.400'}
								fontSize={'9pt'}
							>
								{charsRemaing} Characters Remaining
							</Text>
							<Box mt={4} mb={4}>
								<Text
									fontWeight={'600'}
									color={'yellow.800'}
									fontSize={'16px'}
								>
									Community Type
								</Text>
								{/* <checkbox/> */}
								<Stack spacing={'2px'}>
									<Checkbox
										name={'Public'}
										isChecked={communityType === 'Public'}
										onChange={onCommunityTypeChange}
									>
										<Flex align={'center'}>
											<Text color={'yellow.700'} fontWeight={'600'}>
												Public
											</Text>
											<Text
												fontSize={'9pt'}
												ml="2"
												color={'yellow.800'}
												padding={'1'}
											>
												Description
											</Text>
										</Flex>
									</Checkbox>
									<Checkbox
										name={'Private'}
										isChecked={communityType === 'Private'}
										onChange={onCommunityTypeChange}
									>
										<Flex align={'center'}>
											<Text color={'yellow.700'} fontWeight={'600'}>
												Private
											</Text>
											<Text
												fontSize={'9pt'}
												ml="2"
												color={'yellow.800'}
												padding={'1'}
											>
												Description
											</Text>
										</Flex>
									</Checkbox>
									<Checkbox
										name={'Restricted'}
										isChecked={communityType === 'Restricted'}
										onChange={onCommunityTypeChange}
									>
										<Flex align={'center'}>
											<Text color={'yellow.700'} fontWeight={'600'}>
												Restricted
											</Text>
											<Text
												fontSize={'9pt'}
												ml="2"
												color={'yellow.800'}
												padding={'1'}
											>
												Description
											</Text>
										</Flex>
									</Checkbox>
								</Stack>
							</Box>
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
