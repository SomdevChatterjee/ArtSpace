import React from 'react';
import Navbar from './Navbar/Navbar';

type LayoutProps = {

};

const Layout:React.FC = ({children}:any) => {
    
    return (
    <>
        <Navbar/>
        <main>{children}</main>
    </>
    
    );
}
export default Layout;