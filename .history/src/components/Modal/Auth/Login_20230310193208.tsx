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
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        //update form state
        setLoginForm
    };
	return (
		<form>
			{/* 2 inputs */}
			<Input name="email" placeholder="email" mb={2} onChange={() => {}} />
			<Input
				name="password"
				placeholder="password"
				type={'password'}
				onChange={onChange}
			/>
			<Button type="submit"> Login</Button>
		</form>
	);
};
export default Login;
