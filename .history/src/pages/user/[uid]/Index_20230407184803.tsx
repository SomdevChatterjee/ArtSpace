import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
        <Flex>
            <Text color={"yellow."}>New</Text>
            <Text color={"yellow."}>Hot</Text>
            <Text color={"yellow."}>Top</Text>
        </Flex>
    </IndexContentLayout>)
}
export default Index;