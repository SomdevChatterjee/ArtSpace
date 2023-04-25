import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react';
import { IconType } from 'react-icons/lib';

type MenuListItemProps = {
    displayText:string;
    link:string;
    icon:IconType;
    iconColor:string;
    imageUrl?:string;
};

const MenuListItem:React.FC<MenuListItemProps> = ({}) => {
    
    return <div>Have a good coding</div>
}
export default MenuListItem;