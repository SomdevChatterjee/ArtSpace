import React from 'react';
import Navbar from './Navbar/Navbar';

type LayoutProps = {

};

const Layout:React.FC = (children:any) => {
    
    return (
    <>
        <Navbar/>
        <main>children.props</main>
    </>
    
    );
}
export default Layout;