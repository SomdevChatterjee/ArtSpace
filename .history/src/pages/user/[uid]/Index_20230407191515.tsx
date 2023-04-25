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
        <Text color={"yello"}></Text>
        <Text color={"yello"}></Text>
        <Text color={"yello"}></Text>
     </Flex>
    </>
    <> </>
  </IndexContentLayout>);
}
export default Index;