import { Button, Flex, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';

type InputImageProps = {
    
};

const InputImage:React.FC<InputImageProps> = () => {
    const selectedFileRef = useRef()
    return (
        <Flex justify="center" padding={4} align={"center"} width="100%">
            <Flex justify={"center"}
            align="center"
            p={20}
            border="1px dashed"
            borderColor={"gray.200"}
            borderRadius={4}
            width="100%">
                <Button  variant={"outline"} height="28px" padding={4} onClick={()=>{}}>
                    Upload
                    <Input /// <reference path="" />
                     type="file"/>
                </Button>
            </Flex>
        </Flex>
    )
}
export default InputImage;