import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
	const [Login, setLoginForm] = useState({
		email: '',
		password: '',
	});
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
			/>
			<Input
                required
				name="password"
				placeholder="password"
				type={'password'}
				onChange={onChange}
                mb={}
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
			<Button width = {"100%"} height={"36px"} mt={2} type="submit"> Login</Button>
		</form>
	);
};
export default Login;
