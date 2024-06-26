import { Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

type TextInputProps = {
    
};

const TextInput:React.FC<TextInputProps> = () => {
    
    return (
        <Stack spacing={3} width={'100%'}>
        <Input/>
        <Textarea/>
        <Flex>
            
        </Flex>
        </Stack>
    );
}
export default TextInput;