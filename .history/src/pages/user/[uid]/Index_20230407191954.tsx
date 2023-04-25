import { Flex, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsFire } from 'react-icons/bs';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
    <>
     <Flex width={"100%"} bg={"white"} padding="10px" borderRadius={"5px"}>
        <Flex>
        <Text color={"blackAlpha.500"} _hover={{color:"yellow.500"}}>New</Text>

        </Flex>
        <Flex >
            <Icon as={BsFire}/>
        <Text color={"blackAlpha.500"} _hover={{color:"yellow.500"}}>Hot</Text>

        </Flex>
        <Flex>

        <Text color={"blackAlpha.500"} _hover={{color:"yellow.500"}}>Top</Text>
        </Flex>
     </Flex>
    </>
    <> </>
  </IndexContentLayout>);
}
export default Index;