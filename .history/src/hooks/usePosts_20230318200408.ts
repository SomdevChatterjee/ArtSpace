import React from 'react'
import { useRecoilState } from 'recoil'
const usePosts = () =>{
    const [postStateValue] = useRecoilState(POst) 
}
export default usePosts