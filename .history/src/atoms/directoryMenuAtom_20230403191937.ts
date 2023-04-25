import{atom} from 'recoil'

export type DirectoryMenuItem  = {
    display:string
}

interface DirectoryMenuState{
    isOpen:boolean;
    selectedMenuItem: any;
}