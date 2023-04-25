import React from 'react'
import { useRecoilState } from 'recoil'
import { postState } from '../atoms/PostAtom'
const usePosts = () =>{
    const [postStateValue] = useRecoilState(postState) 
    return{

    };
}
export default usePosts