import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtoms';

const SignUp: React.FC = () => {
	const [signUp, setsignUForm] = useState({
		email: '',
		password: '',

	});
	const setAuthModalState = useSetRecoilState(authModalState);
	const onSubmit = () => {};
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		//update form state
		setLoginForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	return (
		<form>
			{/* 2 inputs */}
			<Input
				required
				name="email"
				type={'email'}
				placeholder="email"
				mb={2}
				onChange={onChange}
				fontSize={'10pt'}
				_placeholder={{ color: 'gray.500' }}
				_hover={{
					bg: 'white',
					border: '1px solid',
					borderColor: 'yellow.500',
				}}
				_focus={{
					outline: 'none',
					bg: 'white',
					border: '1px solid',
					borderColor: 'yellow.500',
				}}
				bg={'gray.50'}
			/>
			<Input
				required
				name="password"
				placeholder="password"
				type={'password'}
				onChange={onChange}
				mb={2}
				fontSize={'10pt'}
				_placeholder={{ color: 'gray.500' }}
				_hover={{
					bg: 'white',
					border: '1px solid',
					borderColor: 'yellow.500',
				}}
				_focus={{
					outline: 'none',
					bg: 'white',
					border: '1px solid',
					borderColor: 'yellow.500',
				}}
				bg={'gray.50'}
			/>
			<Button width={'100%'} height={'36px'} mt={2} type="submit">
				Login
			</Button>
			<Flex fontSize={'9pt'} justifyContent={'center'}>
				<Text mr={1} fontWeight={700}>
					New to this place
				</Text>
				<Text
					mr={1}
					color={'yellow.500'}
					fontWeight={700}
					cursor={'pointer'}
					onClick={() => {
						setAuthModalState({ view: 'signup', open: true });
					}}
				>
					SIGN UP
				</Text>
			</Flex>
		</form>
	);
};
export default SignUp;
