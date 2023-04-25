import React from 'react'
import { useRecoilState } from 'recoil';
import { directoryMenuState } from '../atoms/directoryMenuAtom';


const useDirectory = () =>{

    const [directoryState, setdirectoryState] = useRecoilState(directoryMenuState)

    const toggleMenuOpen = () =>{
        setdirectoryState(prev =>({
            ...prev,
            isOpen:!direc
        }))
    }

    return {directoryState};
}
export default useDirectory;