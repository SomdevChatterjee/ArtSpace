import { Flex,Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BiBorderRadius } from 'react-icons/bi';
import { tabItem } from './NewPostForm';

type TabItemProps = {
    item:tabItem;
    selected:Boolean;
};

const TabItem:React.FC<TabItemProps> = ({ item, selected }) => {
    
    return (
        <Flex justify={"center"} align={"center"} flexGrow={1} p={"14px 0px"} cursor={"pointer"} _hover={{bg:"gray",BorderRadius}}>
            <Flex align={"center"} height={"20px"} mr={2} >
                <Icon as={item.icon}/>
            </Flex>
            <Text fontSize={"10pt"}>{item.title}</Text>
        </Flex>
    )
}
export default TabItem;