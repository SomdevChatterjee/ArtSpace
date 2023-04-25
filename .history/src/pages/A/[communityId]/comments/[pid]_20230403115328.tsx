import React from 'react';
import IndexContentLayout from '../../../../components/Layouts/IndexContentLayout';
import PostItem from '../../../../components/Posts/PostItem';

const PostPage:React.FC = () => {
    
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