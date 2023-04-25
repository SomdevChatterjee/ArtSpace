import{atom} from 'recoil'

export type DirectoryMenuItem  = {
    displayText:string;
    link:string;
    icon:stri
}

interface DirectoryMenuState{
    isOpen:boolean;
    selectedMenuItem: any;
}