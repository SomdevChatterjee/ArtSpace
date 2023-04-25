import React from 'react'
import { useRecoilState } from 'recoil'
import { postState } from '../atoms/PostAtom'
const usePosts = () =>{
    const [postStateValue, setPst] = useRecoilState(postState) 
    return{
        postStateValue
    };
}
export default usePosts