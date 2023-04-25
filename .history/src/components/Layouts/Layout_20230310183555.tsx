import React from 'react';
import Navbar from './Navbar/Navbar';

type LayoutProps = {

};

const Layout:React.FC = (children:pa) => {
    
    return (
    <>
        <Navbar/>
        <main>{children.props}</main>
    </>
    
    );
}
export default Layout;