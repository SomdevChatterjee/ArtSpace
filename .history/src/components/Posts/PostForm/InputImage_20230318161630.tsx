import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

type InputImageProps = {
    
};

const InputImage:React.FC<InputImageProps> = () => {
    
    return (
        <Flex justify="center" padding={4} align={"center"} width="100%">
            <Flex justify={}>
                <Button>Upload</Button>
            </Flex>
        </Flex>
    )
}
export default InputImage;