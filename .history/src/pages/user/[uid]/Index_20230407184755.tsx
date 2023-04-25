import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
        <Flex>
            <Text color={>New</Text>
            <Text color={>Hot</Text>
            <Text color={>Top</Text>
        </Flex>
    </IndexContentLayout>)
}
export default Index;