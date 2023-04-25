import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtoms';
import { auth, firestore } from '../../../firebase/clientApp';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS } from '../../../firebase/errors';
import { addDoc, collection } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { userInfo } from 'os';

const SignUp: React.FC = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const [signUp, setSignUpForm] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [createUserWithEmailAndPassword, userCred, loading, userError] =
		useCreateUserWithEmailAndPassword(auth);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (error) setError('');
		//if passwords doesn't match
		if (signUp.password !== signUp.confirmPassword) {
			//set error
			setError('Passwords Do not Match');
			return;
		}
		//passwords match
		createUserWithEmailAndPassword(signUp.email, signUp.password);
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		//update form state
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const createUserDoc = async (user:user) =>{
		await addDoc(collection(firestore, 'users'), JSON.parse(JSON.stringify(user)));
	};

	useEffect(()=>{
		if(userCred) {
			createUserDoc(userCred.user.providerData[0]);
		}
	}, [userCred])

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
					color:'yellow.800'
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
					color:'yellow.800'
				}}
				bg={'gray.50'}
			/>
			<Input
				required
				name="confirmPassword"
				placeholder="Confirm Password"
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
					color:'yellow.800'
				}}
				bg={'gray.50'}
			/>
			
					<Text
						textAlign={'center'}
						color={'yellow.800'}
						fontWeight={'900'}
						fontSize={'10pt'}
					>
						{error ||
							FIREBASE_ERRORS[
								userError?.message as keyof typeof FIREBASE_ERRORS
							]}
					</Text>
				
			<Button
				width={'100%'}
				height={'36px'}
				mt={2}
				mb={2}
				type="submit"
				isLoading={loading}
			>
				Sign Up
			</Button>
			<Flex fontSize={'9pt'} justifyContent={'center'}>
				<Text mr={1} fontWeight={700}>
					Already a part of this place ?
				</Text>
				<Text
					mr={1}
					color={'yellow.500'}
					fontWeight={700}
					cursor={'pointer'}
					onClick={() => {
						setAuthModalState({ view: 'login', open: true });
					}}
				>
					LOGIN
				</Text>
			</Flex>
		</form>
	);
};
export default SignUp;
