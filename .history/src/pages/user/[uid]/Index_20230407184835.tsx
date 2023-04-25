import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import IndexContentLayout from '../../../components/Layouts/IndexContentLayout';

type IndexProps = {
    user:User
};

const Index:React.FC<IndexProps> = () => {
    
    return (<IndexContentLayout>
        <Flex>
            <Text color={"yellow.200"}>New</Text>
            <Text color={"yellow.200"}>Hot</Text>
            <Text color={"yellow.200"}>Top</Text>
        </Flex>
    </IndexContentLayout>)
}
export default Index;