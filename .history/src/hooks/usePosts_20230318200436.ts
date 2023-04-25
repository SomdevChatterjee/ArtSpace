import React from 'react'
import { useRecoilState } from 'recoil'
import { postState } from '../atoms/PostAtom'
const usePosts = () =>{
    const [postStateValue, set] = useRecoilState(postState) 
    return{
        postStateValue
    };
}
export default usePosts