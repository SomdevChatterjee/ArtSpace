import { async } from '@firebase/util'
import React from 'react'
import { useRecoilState } from 'recoil'
import { postState } from '../atoms/PostAtom'
const usePosts = () =>{
    const [postStateValue, setPostStateValue] = useRecoilState(postState) 
    const onVote = async () => {}
    const onSelectPost = async () => {}
    const onDeletePost

    return{
        postStateValue,
        setPostStateValue,
    };
}
export default usePosts