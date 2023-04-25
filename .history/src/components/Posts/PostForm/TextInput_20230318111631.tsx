import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

type TextInputProps = {
    
};

const TextInput:React.FC<TextInputProps> = () => {
    
    return (
        <Stack spacing={3} width={'100%'}>
        <Input
        name="title"
        value={""}
        onChange={()=>{}}
        fontSize="10pt"
        />
        <Textarea/>
        <Flex>
            <Button>Post</Button>
        </Flex>
        </Stack>
    );
}
export default TextInput;