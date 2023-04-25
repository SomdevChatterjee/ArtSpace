import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

type TextInputProps = {
    
};

const TextInput:React.FC<TextInputProps> = () => {
    
    return (
        <Stack  padding={3} width={'100%'}>
        <Input
        name="title"
        value={""}
        onChange={()=>{}}
        fontSize="10pt"
        borderRadius={4}
        _placeholder={{color:"gray.500"}}
        placeholder="Title"
        _focus={{outline:"none", bg:"white", border:"1px solid black"}}/>
        <Textarea/>
        <Flex>
            <Button>Post</Button>
        </Flex>
        </Stack>
    );
}
export default TextInput;