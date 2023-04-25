import { Flex,Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { tabItem } from './NewPostForm';

type TabItemProps = {
    item:tabItem;
    selected:Boolean;
};

const TabItem:React.FC<TabItemProps> = ({ item, selected }) => {
    
    return (
        <Flex>
            <Flex align={}>
                <Icon as={item.icon}/>
            </Flex>
            <Text>{item.title}</Text>
        </Flex>
    )
}
export default TabItem;