import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
        <Flex>
            <Text>New</Text>
            <Text></Text>
            <Text></Text>
        </Flex>
    </IndexContentLayout>)
}
export default Index;