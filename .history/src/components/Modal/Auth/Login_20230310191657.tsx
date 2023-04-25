import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const [Login, setLoginForm] = useState({
        email:"",
        password:"",
    });
    return (
        <form>
            {/* 2 inputs */}
            <Input/>
            <Input/>
        </form>
    );
}
export default Login;