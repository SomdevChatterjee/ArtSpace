import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
	const [Login, setLoginForm] = useState({
		email: '',
		password: '',
	});
	return (
		<form>
			{/* 2 inputs */}
			<Input name='email' placeholder='email' mb={2} onChange = {()=>{}}/>
			<Input name='password' />
		</form>
	);
};
export default Login;
