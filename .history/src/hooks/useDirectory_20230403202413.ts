/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React,{useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { communityState } from '../atoms/communitiesAtom';
import { DirectoryMenuItem, directoryMenuState } from '../atoms/directoryMenuAtom';


const useDirectory = () =>{

    const [directoryState, setdirectoryState] = useRecoilState(directoryMenuState)
    const router = useRouter()
    const communityStateValue = useRecoilValue(communityState)
    const onSelecteMenuItem = (menuItem:DirectoryMenuItem) =>{
        setdirectoryState(prev =>({
            ...prev, 
            selectedMenuItem:menuItem,
        }));
        router.push(menuItem.link);
        if(directoryState.isOpen){
            toggleMenuOpen()
        }
    };

    const toggleMenuOpen = () =>{
        setdirectoryState(prev =>({
            ...prev,
            isOpen:!directoryState.isOpen,
        }))
    }

    useEffect(()=>{
        const {currentCommunity} = communityStateValue;

        if(currentCommunity){
            setdirectoryState(prev =>({
                ...prev,
                selectedMenuItem:{ displayText:`A/${currentCommunity.id}`,
                link:`/A/${currentCommunity.id}/Index`,
                imageURL:currentCommunity.imageUrl
            }
            }))
        }

    },[communityStateValue.currentCommunity])

    return {directoryState, toggleMenuOpen, onSelecteMenuItem};
}
export default useDirectory;