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
            <Input
        </form>
    );
}
export default Login;