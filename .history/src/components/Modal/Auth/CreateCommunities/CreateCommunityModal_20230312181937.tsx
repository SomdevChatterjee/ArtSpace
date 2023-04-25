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
	Icon,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsEyeFill, BsPersonFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';
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
	const [error, setError] = useState('');
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

	const handlecreateCommunity = async () => {
		//Validate the community name see if its present already or not
        const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        if((format.test[communityName]) || (communityName.length < 3)){
            setError("communtiy name must contain letter, numbersor underscores and must be of 3-21 characters")
        }
		// Create the community document in firestore
	};

	return (
		<>
			<Modal isOpen={open} onClose={handleClose} size={'2xl'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader color={'yellow.800'}>
						Create A Community
					</ModalHeader>
					<Box padding={6}>
						<ModalCloseButton />
						<ModalBody
							display={'flex'}
							flexDir={'column'}
							padding={'10px 0px'}
						>
							<Text
								fontWeight={'900'}
								fontSize={'16pt'}
								color={'yellow.800'}
							>
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
								_focus={{ color: 'yellow.800' }}
								_hover={{ outlineColor: 'yellow.700' }}
							/>
							<Text
								color={charsRemaing !== 0 ? 'green.400' : 'red.400'}
								fontSize={'9pt'}
							>
								{charsRemaing} Characters Remaining
							</Text>
							<Text fontSize={'9pt'} mt={1}>
								{error}
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
											<Icon
												as={BsPersonFill}
												color={'yellow.600'}
												mr={2}
											/>
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
											<Icon
												as={HiLockClosed}
												color={'yellow.600'}
												mr={2}
											/>
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
											<Icon
												as={BsEyeFill}
												color={'yellow.600'}
												mr={2}
											/>
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

					<ModalFooter
						bg={'yellow.100'}
						borderRadius={'0px 0px 10px 10px'}
					>
						<Button
							variant={'outline'}
							colorScheme="blue"
							mr={3}
							onClick={handleClose}
						>
							Close
						</Button>
						<Button height={37} onClick={() => {}}>
							Create Community
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default CreateCommunityModal;
