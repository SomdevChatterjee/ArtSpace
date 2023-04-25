import React from 'react';
import Navbar from './Navbar/Navbar';

type LayoutProps = {

};

const Layout:React.FC = ({children}:intris) => {
    
    return (
    <>
        <Navbar/>
        <main>{children}</main>
    </>
    
    );
}
export default Layout;