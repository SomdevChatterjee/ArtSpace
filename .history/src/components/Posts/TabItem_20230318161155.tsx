import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BiBorderRadius } from 'react-icons/bi';
import { tabItem } from './NewPostForm';

type TabItemProps = {
    key:string,
	item: tabItem;
	selected: Boolean;
    setSelectedTab:(value:string) =>void
};

const TabItem: React.FC<TabItemProps> = ({ item, selected, setSelectedTab }) => {
	return (
		<Flex
			justify={'center'}
			align={'center'}
			flexGrow={1}
			p={'14px 0px'}
            fontWeight={selected?"800":"400"}
			cursor={'pointer'}
			_hover={{ bg: "yellow.200" }}
            color={selected? "yellow.400" : "gray.400"}
            borderRightWidth = {selected ? "0px 1px 2px 0px ":"0px 1px 1px 0px"} 
            borderBottom={selected ? "2px solid":"0px"}
            borderBottomColor={selected ?"yellow.400":"gray.200"}
            borderRightColor={"gray.200"}
            onClick={()=>setSelectedTab(item.title)}
		>
			<Flex align={'center'} height={'20px'} mr={2} key={item.title}>
				<Icon as={item.icon} />
			</Flex>
			<Text fontSize={'10pt'}>{item.title}</Text>
		</Flex>
	);
};
export default TabItem;
