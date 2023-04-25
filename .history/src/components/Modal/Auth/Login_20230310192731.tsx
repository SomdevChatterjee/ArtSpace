import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from '../../../charka/Button';

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
			<Input name='password' placeholder='password' type={"password"} onChange={()=>{}}/>
            <Button type> Login</Button>
		</form>
	);
};
export default Login;
