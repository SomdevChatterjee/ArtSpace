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
            <Input type={"submit"} width={'100%'}
				height={'36px'}
				mt={2}
				variant={'solid'}/>
		</form>
	);
};
export default Login;
