import React from 'react';
import Navbar from './Navbar/Navbar';

type LayoutProps = {

};

const Layout:React.FC = ({children}:IntrisicAttribute) => {
    
    return (
    <>
        <Navbar/>
        <main>{children}</main>
    </>
    
    );
}
export default Layout;