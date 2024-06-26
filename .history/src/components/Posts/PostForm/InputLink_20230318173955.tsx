import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

type Input = {
	textInputs: {
		title: string;
		body: string;
	};
	onChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleCreatePost: () => void;
	loading: boolean;
};

const TextInput: React.FC<Input> = ({
	textInputs,
	onChange,
	handleCreatePost,
	loading,
}) => {
	return (
		<Stack spacing={3} padding={3} width={'100%'}>
			<Input
				name="title"
				value={textInputs.title}
				onChange={onChange}
				fontSize="10pt"
				borderRadius={4}
				_placeholder={{ color: 'gray.500' }}
				placeholder="Title"
				_focus={{ outline: 'none', bg: 'white', border: '1px solid black' }}
			/>
			<Textarea
				name="body"
				value={textInputs.body}
				onChange={onChange}
				fontSize="10pt"
				borderRadius={4}
				_placeholder={{ color: 'gray.500' }}
				placeholder="Body"
				_focus={{ outline: 'none', bg: 'white', border: '1px solid black' }}
			/>
			<Flex justifyContent={'flex-end'}>
				<Button
					height={'34px'}
					padding="0px 30px"
					disabled={!textInputs.title}
					onClick={() => {}}
                    isLoading={loading}
				>
					Post
				</Button>
			</Flex>
		</Stack>
	);
};
export default TextInput;
