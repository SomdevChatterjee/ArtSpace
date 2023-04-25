import { Flex } from '@chakra-ui/react';
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
        </Flex>
    )
}
export default TabItem;