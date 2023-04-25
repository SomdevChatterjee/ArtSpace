import{atom} from 'recoil'

export type DirectoryMenuItem  = {
    display:s
}

interface DirectoryMenuState{
    isOpen:boolean;
    selectedMenuItem: any;
}