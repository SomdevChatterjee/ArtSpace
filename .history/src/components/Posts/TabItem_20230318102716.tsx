import React from 'react';
import { tabItem } from './NewPostForm';

type TabItemProps = {
    item:tabItem;
};

const TabItem:React.FC<TabItemProps> = ({ item }) => {
    
    return <div>{item.}</div>
}
export default TabItem;