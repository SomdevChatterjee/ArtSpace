import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

type TextInputProps = {
    textInputs:{
        title:string;
        body:string;
    }
    onChange:(
        event:React.ChangeEvent<html>
    ) => void
};

const TextInput: React.FC<TextInputProps> = () => {
	return (
		<Stack spacing={3} padding={3} width={'100%'}>
			<Input
				name="title"
				value={''}
				onChange={() => {}}
				fontSize="10pt"
				borderRadius={4}
				_placeholder={{ color: 'gray.500' }}
				placeholder="Title"
				_focus={{ outline: 'none', bg: 'white', border: '1px solid black' }}
			/>
			<Textarea
				name="body"
				value={''}
				onChange={() => {}}
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
					disabled={false}
					onClick={() => {}}
				>
					Post
				</Button>
			</Flex>
		</Stack>
	);
};
export default TextInput;
