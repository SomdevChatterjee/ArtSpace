import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react';

type MenuListItemProps = {
    displayText:string;
    link:string;
    icon:IconTy
};

const MenuListItem:React.FC<MenuListItemProps> = () => {
    
    return <div>Have a good coding</div>
}
export default MenuListItem;