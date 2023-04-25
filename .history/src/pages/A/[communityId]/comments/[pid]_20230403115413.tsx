import React from 'react';
import IndexContentLayout from '../../../../components/Layouts/IndexContentLayout';
import PostItem from '../../../../components/Posts/PostItem';
import usePosts from '../../../../hooks/usePosts';

const PostPage:React.FC = () => {
    const{} = usePosts()
    return (
        <IndexContentLayout>
            <>
            <PostItem/>
            {/* <Comments/> */}
            </>
            <>
            {/* <About/> */}
            </>
        </IndexContentLayout>
    )
}
export default PostPage;