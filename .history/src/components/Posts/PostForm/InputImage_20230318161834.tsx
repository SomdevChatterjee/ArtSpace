import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

type InputImageProps = {
    
};

const InputImage:React.FC<InputImageProps> = () => {
    
    return (
        <Flex justify="center" padding={4} align={"center"} width="100%">
            <Flex justify={"center"}
            align="center"
            p={20}
            border="1px dashed"
            borderColor={"gray.200"}
            borderRadius={4}
            width="100%">
                <Button variant={"outline"} height="28px" padding={2}>Upload</Button>
            </Flex>
        </Flex>
    )
}
export default InputImage;