import React from 'react'
import { useRecoilState } from 'recoil';
import { directoryMenuState } from '../atoms/directoryMenuAtom';


const useDirectory = () =>{

    const [directoryState, setdirectoryState] = useRecoilState(directoryMenuState)


    return {};
}
export default useDirectory;