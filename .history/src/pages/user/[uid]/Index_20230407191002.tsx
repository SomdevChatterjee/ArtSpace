import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
        <Flex width={"100%"} bg>
            <Text>Hello</Text>
        </Flex>
    </IndexContentLayout>)
}
export default Index;