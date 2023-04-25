import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
    <>
     <Flex>
        <Text color={"yellow.100"} _hover={{color:""}}></Text>
        <Text color={"yellow.100"} _hover={{color:""}}></Text>
        <Text color={"yellow.100"} _hover={{color:""}}></Text>
     </Flex>
    </>
    <> </>
  </IndexContentLayout>);
}
export default Index;