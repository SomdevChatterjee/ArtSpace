import { Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { authModalState } from '../../../atoms/authModalAtoms';
import { useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../firebase/errors';
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
	const [Login, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		signInWithEmailAndPassword(Login.email, Login.password);
	};
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		//update form state
		setLoginForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	return (
		<form onSubmit={onSubmit}>
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
			<Text
				textAlign={'center'}
				color={'yellow.800'}
				fontWeight={'900'}
				fontSize={'10pt'}
			>
				{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
			</Text>
			<Button
				width={'100%'}
				height={'36px'}
				mt={2}
				type="submit"
				isLoading={loading}
			>
				Login
			</Button>
			<Flex fontSize={'9pt'} justifyContent={'center'} mt={2} mb={2}>
				<Text mr={1} fontWeight={700}>
					Forgot Your Password
				</Text>
				<Text
					mr={1}
					color={'yellow.500'}
					fontWeight={700}
					cursor={'pointer'}
					onClick={() => {
					}}
				>
					RESET PASSWORD
				</Text>
			</Flex>
			<Flex fontSize={'9pt'} justifyContent={'center'}>
				<Text mr={1} fontWeight={700}
				mb={2}>
					New to this place
				</Text>
				<Text
					mr={1}
					color={'yellow.500'}
					fontWeight={700}
					cursor={'pointer'}
					onClick={() => {
						
						});
					}}
				>
					SIGN UP
				</Text>
			</Flex>
		</form>
	);
};
export default Login;
