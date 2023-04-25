import React from 'react'
import { useRecoilState } from 'recoil';
import { DirectoryMenuItem, directoryMenuState } from '../atoms/directoryMenuAtom';


const useDirectory = () =>{

    const [directoryState, setdirectoryState] = useRecoilState(directoryMenuState)
    const router = 
    const onSelecteMenuItem = (menuItem:DirectoryMenuItem) =>{
        setdirectoryState(prev =>({
            ...prev, 
            selectedMenuItem:menuItem,
        }))
    }

    const toggleMenuOpen = () =>{
        setdirectoryState(prev =>({
            ...prev,
            isOpen:!directoryState.isOpen,
        }))
    }

    return {directoryState, toggleMenuOpen};
}
export default useDirectory;