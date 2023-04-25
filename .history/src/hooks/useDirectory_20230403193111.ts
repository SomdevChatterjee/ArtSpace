import React from 'react'
import { useRecoilState } from 'recoil';
import { DirectoryMenuItem, directoryMenuState } from '../atoms/directoryMenuAtom';


const useDirectory = () =>{

    const [directoryState, setdirectoryState] = useRecoilState(directoryMenuState)

    const onSelecteMenuItem = (menuItem:DirectoryMenuItem)

    const toggleMenuOpen = () =>{
        setdirectoryState(prev =>({
            ...prev,
            isOpen:!directoryState.isOpen,
        }))
    }

    return {directoryState, toggleMenuOpen};
}
export default useDirectory;