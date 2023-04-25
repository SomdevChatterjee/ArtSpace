import { useRouter } from 'next/router';
import React from 'react'
import { useRecoilState } from 'recoil';
import { DirectoryMenuItem, directoryMenuState } from '../atoms/directoryMenuAtom';


const useDirectory = () =>{

    const [directoryState, setdirectoryState] = useRecoilState(directoryMenuState)
    const router = useRouter()
    const onSelecteMenuItem = (menuItem:DirectoryMenuItem) =>{
        setdirectoryState(prev =>({
            ...prev, 
            selectedMenuItem:menuItem,
        }));
        router.push(menuItem.link);
        if(directoryMenuState.isOp)
        toggleMenuOpen()
    }

    const toggleMenuOpen = () =>{
        setdirectoryState(prev =>({
            ...prev,
            isOpen:!directoryState.isOpen,
        }))
    }

    return {directoryState, toggleMenuOpen, onSelecteMenuItem};
}
export default useDirectory;