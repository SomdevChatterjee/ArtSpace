import { IconType } from 'react-icons/lib';
import{atom} from 'recoil'

export type DirectoryMenuItem  = {
    displayText:string;
    link:string;
    icon:IconType;
    iconColor:string;
    imageURL?:
}

interface DirectoryMenuState{
    isOpen:boolean;
    selectedMenuItem: any;
}