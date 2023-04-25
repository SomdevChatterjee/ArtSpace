import { Flex,Icon } from '@chakra-ui/react';
import React from 'react';
import { tabItem } from './NewPostForm';

type TabItemProps = {
    item:tabItem;
    selected:Boolean;
};

const TabItem:React.FC<TabItemProps> = ({ item, selected }) => {
    
    return (
        <Flex>
            <Flex>
                <Icon as={item.icon}/>
            </Flex>
            <Text></Text>
        </Flex>
    )
}
export default TabItem;