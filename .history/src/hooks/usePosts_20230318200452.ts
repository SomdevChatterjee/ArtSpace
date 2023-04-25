import React from 'react'
import { useRecoilState } from 'recoil'
import { postState } from '../atoms/PostAtom'
const usePosts = () =>{
    const [postStateValue, setPostStateValue] = useRecoilState(postState) 
    return{
        postStateValue,
        setPostStateValue
    };
}
export default usePosts