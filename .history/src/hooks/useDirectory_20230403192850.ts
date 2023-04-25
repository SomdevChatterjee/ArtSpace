import React from 'react'
import { useRecoilState } from 'recoil';
import { directoryMenuState } from '../atoms/directoryMenuAtom';


const useDirectory = () =>{

    const [directoryState, setdirectoryState] = useRecoilState(directoryMenuState)

    const toggleMenuOpen = () =>{
        set
    }

    return {directoryState};
}
export default useDirectory;