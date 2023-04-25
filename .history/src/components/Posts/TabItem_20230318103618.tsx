import React from 'react';
import { tabItem } from './NewPostForm';

type TabItemProps = {
    item:tabItem
    <select name="" id=""></select>
};

const TabItem:React.FC<TabItemProps> = ({ item }) => {
    
    return <div>{item.title}</div>
}
export default TabItem;