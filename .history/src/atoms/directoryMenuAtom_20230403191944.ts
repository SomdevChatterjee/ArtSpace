import{atom} from 'recoil'

export type DirectoryMenuItem  = {
    displayText:string;
    link
}

interface DirectoryMenuState{
    isOpen:boolean;
    selectedMenuItem: any;
}