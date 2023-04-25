import React from 'react';
import { tabItem } from './NewPostForm';

type TabItemProps = {
    item:tabItem;
    selected:Boolean;
};

const TabItem:React.FC<TabItemProps> = ({ item }) => {
    
    return <div>{item.title}</div>
}
export default TabItem;