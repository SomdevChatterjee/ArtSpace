import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
    <>
     <Flex width={"100%"} bg={"white"} padding="10px" borderRadius={"5px"}>
        <Text color={"blackAlpha.400"} _hover={{color:"yellow.500"}}>New</Text>
        <Text color={"blackAlpha.400"} _hover={{color:"yellow.500"}}></Text>
        <Text color={"blackAlpha.400"} _hover={{color:"yellow.500"}}></Text>
     </Flex>
    </>
    <> </>
  </IndexContentLayout>);
}
export default Index;