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
     <Flex width={"100%"} bg={"white"} padding="10px" borderRadius={"5px"} align="center" justify={"flex-start"}>
        <Flex mr={2}>
        <Icon as={BsFire}/>
        <Text fontWeight={700} color={"blackAlpha.500"} _hover={{color:"yellow.500"}}>New</Text>

        </Flex>
        <Flex mr={2} color={"blackAlpha.500"} _hover={{borderRadius:"20px", bgColor:"gray.100", color:"yellow.500"}} padding="">
        <Icon as={BsFire}/>
        <Text fontWeight={700}>Hot</Text>

        </Flex>
        <Flex mr={2}>
        <Icon as={BsFire}/>
        <Text fontWeight={700} color={"blackAlpha.500"} _hover={{color:"yellow.500"}}>Top</Text>
        </Flex>
     </Flex>
    </>
    <> </>
  </IndexContentLayout>);
}
export default Index;